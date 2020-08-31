const chromium = require("chrome-aws-lambda");
const fs = require("fs");
const path = require("path");
const slugify = require("slugify");

(async () => {
  console.log("Starting style images...");

  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  });

  // Get generated data json
  const styles = require("../src/_data/styles.json");

  const page = await browser.newPage();

  // Set the viewport to your preferred image size
  await page.setViewport({
    width: 1300,
    height: 800,
    deviceScaleFactor: 0.35,
  });

  // Create a `previews` directory in the public folder
  const dir = path.resolve(__dirname, "../public/img/styles");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  // Go over all the posts
  for (const post of styles) {
    const slug = slugify(post.title, {
      lower: true,
      replacement: "-",
      remove: /[*+~·,()'"`´%!?¿:@\/]/g,
    });

    const html = fs
      .readFileSync(path.resolve(__dirname, `../public/styles/${slug}/index.html`))
      .toString();

    const style = fs
      .readFileSync(path.resolve(__dirname, `../public/styles/css/${slug}.css`))
      .toString();

    if (style) {
      // Render html, wait for 0 network connections to ensure webfonts downloaded
      await page.setContent(html, {
        waitUntil: ["networkidle0"],
      });

      await page.evaluate((style) => {
        const head = document.getElementsByTagName("head")[0];
        var css = document.createElement("STYLE");
        css.innerHTML = style;
        head.appendChild(css);
      }, style);

      // Wait until the document is fully rendered
      await page.evaluateHandle("document.fonts.ready");

      if (post.title === "Headquarters") {
        await page.waitFor(400);
      } else {
        await page.waitFor(250);
      }

      console.log(`Image: ${slug}.jpg`);

      // Save a screenshot to public/img/slug-of-post.png
      await page.screenshot({
        path: `${dir}/${slug}.jpg`,
        type: "jpeg",
        quality: 80,
        clip: { x: 0, y: 0, width: 1300, height: 800 },
      });
    }
  }

  await browser.close();
  console.log("Style images complete!");
})();
