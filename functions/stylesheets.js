const chromium = require("chrome-aws-lambda");
const fs = require("fs");
const path = require("path");
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
  const styles = require("../src/_data/styles.json");

  // Go over all the styles
  for (const style of styles) {
    const slug = slugify(style.title, {
      lower: true,
      replacement: "-",
      remove: /[*+~·,()'"`´%!?¿:@\/]/g,
    });
    const fileName = `${slug}.css`;

    if (!style.stylesheet.includes(".css")) {
      console.log(`${slug} is invalid`);
      continue;
    }

    try {
      await page.goto(style.stylesheet);

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

      const stylesheet = await page.evaluate(() => document.querySelector("pre").innerText);

      fs.writeFileSync(`src/styles/css/${fileName}`, `${attribution}\n\n${stylesheet}`);
    } catch (e) {
      console.log(`404: ${fileName}`);
      console.error(e);
      continue;
    }
  }

  await browser.close();
  console.log("Stylesheets complete!");
})();
