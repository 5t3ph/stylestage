const axios = require("axios");
require("dotenv").config();

const apiRoot = "https://dev.to/api/articles/me/published?per_page=10";

const getExcerpt = (md) => {
  // Remove MD links
  const linksRE = /\[(.+)\]\((.+)\)/gm;
  let content = md.replace(linksRE, "$1");

  // Convert bullets to comma list
  const listStartRE = /(:\s-\s)/gm;
  content = content.replace(listStartRE, ": ");
  const listItemRE = /(?<!:)(\s-\s)/gm;
  content = content.replace(listItemRE, "; ");

  // Remove intro blockquote
  const regex = /> _(.*)_\./;
  content = content.replace(regex, "").trim();

  // Remove italic formatting
  const em = /_(.*)_/gm;
  content = content.replace(em, "$1").trim();

  // Remove blockquote start
  const bq = /\s>/gm;
  content = content.replace(bq, "").trim();

  return content.substr(0, content.lastIndexOf(" ", 120)) + "...";
};

module.exports = async () => {
  const { data } = await axios.get(apiRoot, { headers: { "api-key": process.env.DEVTO } });

  let response = [];
  const seriesText = "modern CSS";

  // Grab the items and re-format to the fields we want
  if (data.length) {
    const series = data.filter((item) => item.description.includes(seriesText));
    const seriesLength = series.length;

    response = series.map((item, index) => {
      const episode = index === seriesLength ? index : seriesLength - index;

      return {
        title: item.title,
        url: item.url,
        description: getExcerpt(item.body_markdown),
      };
    });
  }
  return response;
};
