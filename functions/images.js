require("dotenv").config();
const chromium = require("chrome-aws-lambda");

async function screenshot(slug, title, author) {
  const baseURL = process.env.URL || "https://social-images--moderncss-styles.netlify.app/";
  const url = `${baseURL}/social-template/`;
  let options = {
    path: "./image.png",
    type: "png",
    // encoding: "base64",
  };
  let pageData = { slug, title: decodeURIComponent(title), author: decodeURIComponent(author) };

  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  });

  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: ["load", "networkidle0"],
    timeout: 5000,
  });

  await page.evaluateHandle("document.fonts.ready");

  await page.setViewport({
    width: 600,
    height: 315,
    deviceScaleFactor: 2,
  });

  await page.evaluate(({ slug, title, author }) => {
    const h1 = document.querySelector("h1");
    h1.innerHTML = title;

    const subtitle = document.querySelector("h2");
    subtitle.innerHTML =
      slug === "home"
        ? "A modern CSS showcase styled by community&nbsp;contributions"
        : "Style Stage";

    if (author) {
      var authorEl = document.createElement("SMALL");
      authorEl.innerHTML = `By ${author}`;
      h1.appendChild(authorEl);
    }
  }, pageData);

  let output = await page.screenshot(options);

  await browser.close();

  return output;
}

(async () => {
  await screenshot("gallery", "Gallery", "Olivia%20Ng");
})();
