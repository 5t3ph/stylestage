const chromium = require("chrome-aws-lambda");
const fs = require("fs");
const slugify = require("slugify");

(async () => {
  console.log("Starting stylesheets...");

  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  });

  const page = await browser.newPage();

  // Get styles data
  let styles = require("../src/_data/styles.json");

  // Go over all the styles
  for (const style of styles) {
    const slug = slugify(style.title, {
      lower: true,
      replacement: "-",
      remove: /[*+~·,()'"`´%!?¿:@\/]/g,
    });
    const fileName = `${slug}.css`;
    let stylesheet = style.stylesheet;

    if (!stylesheet.includes(".css")) {
      console.log(`${slug} is invalid`);
      continue;
    }

    // CodePen changed things up and no longer makes the pen styles
    // available as a separate stylesheet
    let codepen = false;
    if (stylesheet.includes("codepen")) {
      codepen = true;
      stylesheet = stylesheet.replace(/codepen.io\/(.+)\/pen\/(.+).css/, "cdpn.io/$1/fullpage/$2");
    }

    try {
      await page.goto(stylesheet);

      const attribution = `/*!
* LICENSE - style only: CC BY-NC-SA
* @link https://creativecommons.org/licenses/by-nc-sa/3.0/
* Graphics copyright of ${style.author}
* 
* Title: ${style.title}
* Author: ${style.author}
* Website: ${style.websiteUrl || "N/A"}
* Twitter: @${style.twitter || "N/A"}
*
* View on Style Stage:
* @link https://stylestage.dev/styles/${slug}/
*/`;

      let styles = "";
      if (codepen) {
        styles = await page.evaluate(() => document.querySelector("iframe").getAttribute("srcdoc"));

        const stylesRE = /<style>(.+)<\/style>/gms;
        const stylesContent = styles.match(stylesRE);
        styles = stylesContent[0].replace("<style>", "").replace("</style>", "");
      } else {
        styles = await page.evaluate(() => document.querySelector("pre").innerText);
      }

      fs.writeFileSync(`src/styles/css/${fileName}`, `${attribution}\n\n${styles}`);
    } catch (e) {
      console.log(`404: ${fileName}`);
      console.error(e);
      continue;
    }
  }

  await browser.close();
  console.log("Stylesheets complete!");
})();
