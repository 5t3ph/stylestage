const fastglob = require("fast-glob");
const fs = require("fs");

(async () => {
  // Create a "glob" of all styles json files
  const styleFiles = await fastglob("./src/_data/styles/*.json", {
    caseSensitiveMatch: false,
  });

  // Loop through those files and add their content to our `styles` Set
  let styles = new Set();
  for (let style of styleFiles) {
    // Get file created date
    const { birthtime } = fs.statSync(style);

    const styleData = JSON.parse(fs.readFileSync(style));
    // Add file created date
    styleData.date = birthtime;
    // Add to `styles` Set
    styles.add(styleData);
  }

  // Create as array and sort by date
  let stylesArr = [...styles];
  stylesArr = stylesArr.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));

  // Write to a .json file in `_data` for 11ty to find
  fs.writeFile("./src/_data/styles.json", JSON.stringify(stylesArr), function (err) {
    if (err) throw err;
    console.log("Saved styles data");
  });

  return;
})();
