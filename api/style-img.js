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
    timeout: 4500,
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
      body: `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300" fill="#b1eae5"><rect width="400" height="300" /></svg>`,
      isBase64Encoded: false,
    };
  }
}

exports.handler = builder(handler);
