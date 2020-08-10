## Contribute a Stylesheet

Visit the [files section](https://stylestage.dev/) to download the source files.

Or jump right in by [forking the CodePen](https://codepen.io/5t3ph/pen/b493845ae41e836889dd84fdbb0f5291).

Then, create your own version of the stylesheet, being sure to adhere to [the guidelines](https://stylestage.dev/guidelines/). Use it as a starting point, or begin from a blank file! Keep in mind you may not modify the HTML, including adding classes.

You may use any build setup you prefer, but the final submission should be the compiled CSS _unminified_. Style Stage processing will autoprefix your styles and prepend the stylesheet with the [CC BY-NC-SA license](https://creativecommons.org/licenses/by-nc-sa/3.0/) as well as attribution using the metadata you provide.

To submit your stylesheet, create pull request containing a _unique_ `.json` file added to [\_src/\_data/styles/](https://github.com/5t3ph/stylestage/blob/main/src/_data/styles) following the schema below.

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

## Guidelines

> Review the full guidelines and FAQs on [Style Stage](https://stylestage.dev/guidelines).

**As a contributor, you agree to abide by the following guidelines and restrictions:**

- Branding is prohibited with the exception of [Monthly and Weekly sponsors](https://stylestage.dev/support/).
- The HTML is not available to modify, except for attribution values that will be added from your submission metadata.
- You may use any build setup you prefer to create your stylesheet, but the final submission should be the compiled, unminified CSS.
- Stylesheets will become hosted locally to the project as well as be run through autoprefixer to ensure optimal performance.
- Submissions will have licensing and attribution added upon the processing of the provided metadata.
- Any changes made past initial submission will be revealed in the version history and reviewed to ensure guidelines are still met. Removal of the public stylesheet will result in removal from Style Stage.
- You retain copyright over original graphics, and your stylesheet will receive the [CC BY-NC-SA license](https://creativecommons.org/licenses/by-nc-sa/3.0/).
- All asset links, including fonts, must be absolute to external resources. Broken asset links will lead to removal.
- Page load time should not exceed 3 seconds. _Note: This site is built with Eleventy and hosted on Netlify, so your local load time will likely be very close to production load time._
- There should be no contrast errors dedicated when validated against tools like WAVE or
  aXe. Include any notes about false errors in your pull request.
- All graphic assets should respect copyright laws and be licensed appropriately.
- Designs should be responsive and usable across the most widely supported browsers (check
  [caniuse data](https://caniuse.com) as needed)
- When cutting-edge properties are used, appropriate fallbacks should be provided if there
  is a significant impact on the user experience, particularly as it relates to
  accessibility.
- Animations should be removed via `prefers-reduced-motion`. The reset included with the source CSS demonstrates how to do this.
- No content may be permanently hidden, and hidden items must come with an accessible viewing technique.
- Submissions will be rejected for using obscene, excessively violent, or otherwise
  distasteful imagery, violating the above guidelines, or other reasons at the discretion
  of the maintainer. You may be asked to make revisions for minor violations.
- Submissions may be removed if future changes are made that violate the guidelines, or if
  notice is received of copyright violations.

**[Review the full guidelines and FAQs >](https://stylestage.dev/guidelines)**
