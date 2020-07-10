const emojiRegex = require("emoji-regex");
const slugify = require("slugify");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const meta = require("./src/_data/meta");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addWatchTarget("./src/sass/");

  if (meta.environment !== "production") {
    eleventyConfig.addPassthroughCopy("./src/styles");
  }
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/favicon.png");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter("slug", (str) => {
    if (!str) {
      return;
    }

    const regex = emojiRegex();
    // Remove Emoji first
    let string = str.replace(regex, "");

    return slugify(string, {
      lower: true,
      replacement: "-",
      remove: /[*+~·,()'"`´%!?¿:@\/]/g,
    });
  });

  eleventyConfig.addCollection("allPages", function (collection) {
    return collection.getAll().filter((page) => {
      return !page.data.style || page.data.style.title !== "Example";
    });
  });

  eleventyConfig.addCollection("allStyles", function (collection) {
    return collection.getFilteredByTag("styles");
  });

  eleventyConfig.addCollection("featureStyles", function (collection) {
    return collection
      .getFilteredByTag("styles")
      .filter((style) => {
        return style.data.style.featureSlot;
      })
      .sort(function (a, b) {
        return a.data.style.featureSlot - b.data.style.featureSlot;
      });
  });

  eleventyConfig.addFilter("jsonTitle", (str) => {
    if (!str) {
      return;
    }

    let title = str.replace(/((.*)\s(.*)\s(.*))$/g, "$2&nbsp;$3&nbsp;$4");
    title = title.replace(/"(.*)"/g, '\\"$1\\"');
    return title;
  });

  eleventyConfig.addFilter("limit", function (arr, limit) {
    return arr.slice(0, limit);
  });

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
  }).use(markdownItAnchor, {
    permalink: false,
    level: [1, 2, 3],
    slugify: (s) =>
      s
        .trim()
        .toLowerCase()
        .replace(/[\s+~\/]/g, "-")
        .replace(/[().`,%·'"!?¿:@*]/g, ""),
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
    },
  };
};
