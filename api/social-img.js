require("dotenv").config();
const { builder } = require("@netlify/functions");
const chromium = require("chrome-aws-lambda");

async function screenshot(slug, title, author) {
  const baseURL = process.env.URL;
  const url = `${baseURL}/social-template/`;
  let options = {
    type: "png",
    encoding: "base64",
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

async function handler(event, _context) {
  let pathSplit = event.path.split("/").filter((entry) => !!entry);
  let [_base, slug, title, author] = pathSplit;

  try {
    let output = await screenshot(slug, title, author);

    return {
      statusCode: 200,
      headers: {
        "content-type": `image/png`,
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
