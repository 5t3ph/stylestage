---
title: "Guidelines"
---

**[Subscribe to updates](/subscribe/)** to recieve notice of new features, like dark mode!

The HTML for this page was created to be semantic, accessible, and free of nearly all
other opinions. While typically extra divs are to be avoided, each sectioning element
also includes a `.container` div as the first child for use as a styling aid since you do
not have access to alter the base HTML. IDs are included where needed for nav anchors or accessibility, and a small number of additional classes are provided for key elements without IDs.

**As a contributor, you agree to abide by the following guidelines and restrictions:**

- Branding is prohibited with the exception of [Monthly and Weekly sponsors](/support/).
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

## FAQs

### What pages will be restyled?

A dedicated page will be generated for your stylesheet that will restyle a copy of the home page only. Review the [files](/#files) section to get the up-to-date source content.

### How do I create a public stylesheet URL?

You can host on your own domain, but if you don't have one, the following will also work:

- **Github**: You'll need to submit the link to the "raw" version instead of the Github page for it to work properly. This can be a gist or a file within a repo.
- **CodePen**: If you [fork the Style Stage CodePen](https://codepen.io/5t3ph/pen/b493845ae41e836889dd84fdbb0f5291) you can add `.css` to your pen URL and use that. Don't worry about the 404 - Style Stage will be able to extract the styles anyway!

### How do I create a pull request (PR)?

Currently, you must have a [GitHub](https://github.com/) account to participate.

1. Visit the [stylestage repo](https://github.com/5t3ph/stylestage)
1. Select "Fork" (top right on a desktop view)
1. Add your information as noted in [Contribute a Stylesheet](https://github.com/5t3ph/stylestage#contribute-a-stylesheet). You can navigate to the file and edit it via the web interface or clone it to make changes locally.
1. Once edits are made and committed to your fork, visit the [compare page](https://github.com/5t3ph/stylestage/compare) and ensure it lists "base: main" and "compare: [your fork]" and then select "Create pull request"
1. We will receive notice of the PR and review. A preview link will be created on Netlify as part of the PR. We may ask you to make some changes to meet the guidelines, and then if all goes well it will be published!

### What about dark mode?

A near-future update will allow you to optionally display a toggle to flip to dark mode. [Subscribe to updates](/subscribe/) to make sure you get a notification and update your stylesheets!
