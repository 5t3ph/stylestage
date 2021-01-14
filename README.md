![Style Stage](https://repository-images.githubusercontent.com/276970401/fb04d000-bf10-11ea-9e96-3788ae2b16f7)

# Style Stage

## A modern CSS showcase styled by community contributions

Created by Stephanie Eckles ([@5t3ph](https://twitter.com/5t3ph))

> Visit [Style Stage](https://stylestage.dev) to view the available styles, and learn more about this project!

> [View the index of stylesheets](https://github.com/5t3ph/stylestage/blob/main/StylesIndex.md) available in this repo.

## Contribute a Stylesheet

### There are 4 ready-to-go options to get started:

- Visit the [files section](https://stylestage.dev/) to download the source files
- [Get the Sass template](https://github.com/5t3ph/stylestage-sass) for the original Main Stage which includes BrowerSync for hot-reload as you create your styles
- Jump right in by [forking the full source CodePen](https://codepen.io/5t3ph/pen/b493845ae41e836889dd84fdbb0f5291).
- Get a minimal boost with the [Style Stage Skeleton Starter CodePen](https://codepen.io/5t3ph/pen/xxVpYjo)

Then, create your own version of the stylesheet, being sure to adhere to [the guidelines](https://stylestage.dev/guidelines/). Use the starters listed above, or begin from a blank file! Keep in mind you may not modify the HTML, including adding classes.

You may use any build setup you prefer, but the final submission should be the compiled CSS _unminified_. Style Stage processing will autoprefix your styles and prepend the stylesheet with the [CC BY-NC-SA license](https://creativecommons.org/licenses/by-nc-sa/3.0/) as well as attribution using the metadata you provide.

To submit your stylesheet, create pull request containing a _unique_ `.json` file added to [src/\_data/styles/](https://github.com/5t3ph/stylestage/blob/main/src/_data/styles) following the schema below.

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
