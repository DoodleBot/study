# [PostCSS](http://postcss.org/) ([Github](https://github.com/postcss/postcss))

A Node.js module that parses CSS into an Abstract Syntax Tree, then passes that through a set of plugin functions, and then converting the result back into a string which can be output to a file.

## Resources
[API](http://api.postcss.org/)
[Awesome PostCSS](https://github.com/jjaderg/awesome-postcss) - A collaborative list of PostCSS plugins, articles, videos and more. Feel free to contribute!

## Articles
[Some things you may think about PostCSS... and you might be wrong](http://julian.io/some-things-you-may-think-about-postcss-and-you-might-be-wrong/) - Nice intro to why you should add postcss to your workflow.
[PostCSS: The Future after SASS and Less](https://ai.github.io/about-postcss/en/) - Slide presentation
[It's Time for Everyone to Learn About PostCSS: What It Really Is; What It Really Does](http://davidtheclark.com/its-time-for-everyone-to-learn-about-postcss/) - Overview of how PostCSS differs from Preprocessors.
[Improving the quality of your css with postcss](https://www.sitepoint.com/improving-the-quality-of-your-css-with-postcss/) - Quick start guide with suggested plugins.

## Plugins
[List](https://github.com/postcss/postcss/blob/master/docs/plugins.md)
[Searchable Catalog](http://postcss.parts/)

### Featured

#### Basics
[Simple Variables](https://github.com/postcss/postcss-simple-vars)
[Nested](https://github.com/postcss/postcss-nested)
[Mixins](https://github.com/postcss/postcss-mixins)
[autoprefixer](https://github.com/postcss/autoprefixer) - Adds vendor prefixes.
[cssnext](http://cssnext.io/) - Use future css syntax today.
[cssgrace](https://github.com/cssdream/cssgrace) - Adds fallback styling.
[css modules](https://github.com/css-modules/css-modules) - Scopes class names locally.
[postcss use](https://github.com/postcss/postcss-use) - Allows postcss plugins to be enabled directly in the stylesheet.

#### Syntax
[precss](https://github.com/jonathantneal/precss) - Use SASS like markup.
[sugarss](https://github.com/postcss/sugarss) - Indent-based CSS syntax similar to SASS.

#### Linters and Stats
[doiuse](https://github.com/anandthakker/doiuse) - CSS Linter against doiuse database.
[StyleLint](http://stylelint.io/) - CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets.
[StyleLint config standard](https://github.com/stylelint/stylelint-config-standard) - Outfits stylelint with a starting config.
[Stylelint plugins](https://www.npmjs.com/browse/keyword/stylelint-plugin)
[Stylelint configs](https://www.npmjs.com/browse/keyword/stylelint-config)
[Stylefmt](https://github.com/morishitter/stylefmt) - formats styles based on stylelint reports
[BEM Linter](https://github.com/postcss/postcss-bem-linter) - CSS Linter for BEM style conventions.
[immutable-css](https://github.com/johnotander/immutable-css) - A CSS linter for immutable selectors. Warns when you override classes.
[cssstats](https://github.com/cssstats/postcss-cssstats) - Reports statistics for css analysis.
[list-selectors](https://github.com/davidtheclark/list-selectors) - Lists all selectors in css.

#### Other
[css2modernizr](https://github.com/vovanbo/css2modernizr) - Analyze your CSS and output only used Modernizr's settings.
[Vertical Rhythm](https://github.com/markgoodyear/postcss-vertical-rhythm) - A PostCSS plugin to create a custom vertical rhythm unit from the base font-size and line-height.
[font magician](https://github.com/jonathantneal/postcss-font-magician)

## Build Tools
[gulp-postcss](https://github.com/postcss/gulp-postcss)
[gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps)

## Sublime plugins
[PostCSS Sorting](https://packagecontrol.io/packages/PostCSS%20Sorting) - Sort CSS rules content with specified order. [documentation for sorting rules](https://github.com/hudochenkov/postcss-sorting#options)
[PostCSS Syntax Highlighting](https://packagecontrol.io/packages/Syntax%20Highlighting%20for%20PostCSS)
[Editor Plugins for Stylelint](http://stylelint.io/user-guide/complementary-tools/#editor-plugins)
[Sublime Linter](http://sublimelinter.readthedocs.io/en/latest/) - is required for stylelint to work in sublime.
[sublime-stylefmt](https://github.com/dmnsgn/sublime-stylefmt) - allows stylefmt to be run on files within sublime.

## Potential Issues

* Not a standard like SASS, so harder for devs to walk in and understand right away
* Preprocessor dependencies like Bourbon and Neat would be difficult to port.
