require("dotenv").config();
const { builder } = require("@netlify/functions");
const chromium = require("chrome-aws-lambda");

async function screenshot(stylesheet) {
  const baseURL = process.env.URL;
  const url = `${baseURL}/styles/${stylesheet}/`;
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1300,
    height: 800,
    deviceScaleFactor: 0.35,
  });

  await page.goto(url, {
    waitUntil: ["load", "networkidle0"],
    timeout: 3000,
  });

  let options = {
    type: "jpeg",
    encoding: "base64",
    quality: 80,
  };

  await page.evaluateHandle("document.fonts.ready");
  await page.waitForTimeout(250);

  let output = await page.screenshot(options);

  await browser.close();

  return output;
}

async function handler(event, _context) {
  let pathSplit = event.path.split("/").filter((entry) => !!entry);
  let [_base, stylesheet] = pathSplit;

  try {
    let output = await screenshot(stylesheet);

    return {
      statusCode: 200,
      headers: {
        "content-type": `image/jpeg`,
      },
      body: output,
      isBase64Encoded: true,
    };
  } catch (error) {
    console.log("Error", error);

    return {
      statusCode: 200,
      headers: {
        "content-type": "image/svg+xml",
      },
      body: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`,
      isBase64Encoded: false,
    };
  }
}

exports.handler = builder(handler);
