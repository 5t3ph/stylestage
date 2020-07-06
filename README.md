# Style Stage

## A modern CSS showcase styled by community contributions

Created by Stephanie Eckles ([@5t3ph](https://twitter.com/5t3ph))

> Visit [Style Stage](https://stylestage.moderncss.dev) to view the available styles, and learn more about this project!

## Contribute a Stylesheet

Download the source files:

- [Source HTML](https://stylestage.moderncss.dev/source-files/stylestage.html)
- [Source CSS](https://stylestage.moderncss.dev/source-files/style.css)

Then, create your own version of the stylesheet, being sure to adhere to [the guidelines](https://stylestage.moderncss.dev/guidelines/). Use it as a starting point, or begin from a blank file! Keep in mind you may not modify the HTML, including adding classes.

You may use any build setup you prefer, but the final submission should be the compiled CSS _unminified_. Style Stage processing will minify, autoprefix, and prepend the stylesheet with the [CC BY-NC-SA license](https://creativecommons.org/licenses/by-nc-sa/3.0/) as well as attribution using the metadata you provide.

To submit your stylesheet, create pull request with an update to [\_src/\_data/styles.json](https://github.com/5t3ph/stylestage/blob/main/src/_data/styles.json) following the schema below. **Please add your entry at the bottom of the file**.

```json
{
  // Required
  "title": "Main Stage Test",
  "author": "Stephanie Eckles",
  "stylesheet": "https://moderncss.dev/css/style.css",
  // Optional
  "twitter": "5t3ph",
  "websiteTitle": "ModernCSS.dev",
  "websiteUrl": "https://moderncss.dev"
}
```

## Feedback welcome!

You can [file it as an issue](https://github.com/5t3ph/stylestage/issues).

[![Buy me a coffee](https://cdn.buymeacoffee.com/buttons/default-violet.png)](https://www.buymeacoffee.com/moderncss)
