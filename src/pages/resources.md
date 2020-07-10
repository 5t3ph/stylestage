---
title: "Resources"
templateEngineOverride: njk,md
---

Creating your Style Stage stylesheet will challenge you to explore techniques like flexbox and grid to arrange the page, and pseudo elements to add extra content and flair. Take the opportunity to design something a little crazy! So far, gradients and transform: skew() are popular with contributors ✨

Play is a powerful teacher! How far can you push the boundaries while staying accessible and performant? These are skills worth practicing that will equip you to choose the right tool for the job in future projects. Even if the right tool is a framework, you will have a deeper understanding of how styles you apply are working and improve your ability to customize them.

Trust me - it feels good to say: "I can do that in CSS!"

## Stylesheet Creation Tips

- **Enjoy using Sass?** - Me too! Once you fork the repo, you can easily copy the `src/sass/` directory into your own project to start from.
- **Use a style reset** - The source styles include a modified version of Andy Bell's [Modern CSS Reset](https://github.com/hankchizljaw/modern-css-reset)
- **Inspect!** - All modern browsers have an "Inspector" built in which allows you to choose an element on the page and quickly learn more about its HTML structure and related styles. Spend a bit of time learning tricks about the Inspector included in your favorite browser!
- **Become one with the cascade** - The "C" in CSS is going to be your greatest enabler on this project. With limited availability of classes and IDs, you will have much greater success by working _with_ inheritance. Need a refresher? [Check out my episode about the cascade](https://dev.to/5t3ph/intro-to-the-css-cascade-the-c-in-css-1kh0) from my web development course for beginners.
- **Learn about CSS selectors** - Because the Style Stage HTML offers very minimal classes and IDs, you'll want to get familiar with the wide range of ways you can select elements in CSS. I really love this interactive game that covers _32_ selector combinations: [CSS Diner](https://flukeout.github.io/).
- **Cozy up to pseudo elements** - You may not be allowed to alter the HTML, but that doesn't mean you can add extra elements! [Pseudo elements]() allow you to prepend and append extra content, greatly expanding the styling opportunities. In theory you could add two extra elements to every element in the page and... well I'm not going to do the math, but it's a lot of extra elements! These can hold things like extra backgrounds, SVGs, and even text (it's how the "coach marks" are applied on the Main Stage).
- **Try out CSS variables** - The source CSS makes use of [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties). Confession? This is the first project I've used them on, so I still have a lot to learn, too! I'm going to toss this topic to experts like [Miriam Suzanne](https://www.smashingmagazine.com/2019/07/css-custom-properties-cascade/) (who is a Style Stage contributor!) and [Sara Soueidan](https://www.sarasoueidan.com/blog/style-settings-with-css-variables/).
- **Test the most modern CSS** - What interesting techniques can you create with `:focus-within`? Have you tried out grid yet? What about creating an enhanced experience with cutting-edge features by testing for them with `@supports`?
- **Don't forget the skip link!** - The `.skip-link` is the first item in the HTML source's body. On the Main Stage, it appears when in `:focus`, which is expected to be the first "tab" event into the browser window. This is useful for users of assitive technology "skip" the navigation and header fluff to get to the main content. Be sure to give it a style! You can certainly choose to have it always visible.
- **Create inclusive, accessible styles** - At minimum, Style Stage guidelines require meeting accessible contrast as well as removing animations via `prefers-reduced-motion` (demonstrated in the source CSS). Both of these things help create a more inclusive web by ensuring users can enjoy interactive experiences with less barriers. Additionally, ensure you retain accessible `:focus` states for interactive elements. To test, tab over your layout and if you loose track of where you've tabbed, fix the `:focus`! If you're newer to web accessibility, my intro article covers contrast, keyboard interaction, and more including additional resource links.
- **Review all stylesheets** - Don't just look - scroll! Hover! Resize! Most importantly - inspect!
- **Get Style Stage updates** - [Subscribe to the newsletter](/subscribe/) for periodic updates related to new styles and release of new features. You can also pick up the [RSS feed](/feed/).

## Latest from ModernCSS.dev

{% include "devposts.njk" %}
<a class="link" href="https://moderncss.dev">Visit ModernCSS.dev</a>
