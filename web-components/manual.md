# [Web Components](http://webcomponents.org/)

[HTML imports](https://www.w3.org/TR/html-imports/) - html files that can be imported into a page
[HTML templates](https://www.w3.org/TR/html-templates/) - html in inert dom trees that can be cloned and inserted into the document by script
[Custom elements](https://www.w3.org/TR/custom-elements/) - custom tag names
[Shadow DOM](https://www.w3.org/TR/shadow-dom/) - allows for multiple DOM trees, some of which are inert

## [Polymer](https://www.polymer-project.org/1.0/) - Web Components polyfill plug-in

[introduction to Polymer](http://webcomponents.org/articles/a-quick-polymer-introduction/)

## [Custom Elements](https://customelements.io/)

Repository of shared components.

### PRPL Pattern
* Push - send critical components for apps initial view
* Render - load the initial screen ASAP
* Pre-cache - store the elements for remaining views
* Lazy-load - when a new view is called, load the elements

This pattern relies on [HTTP 2](https://http2.github.io/)

Using a compiler like Vulcanize assembles your imports into one flat file so that only that one HTML import is needed.

The PRPL pattern is the opposite of vulcanization. This pattern only loads the minimum individual elements needed to show whats on screen, then lazily load the others.

[Polymer-cli](https://github.com/Polymer/polymer-cli) - Command Line tool for Polymer. Can produce both vulcanized and PRPL versions of a project.

[Polybuild](https://github.com/PolymerLabs/polybuild) - combines vulcanize, crisper, and polyclean into one easy to use solution for optimizing Polymer applications for production. Makes it super easy to vulcanize a file and split the output into two files: a HTML file for the templates and a JavaScript file for the Polymer code.

[Polylint](https://github.com/PolymerLabs/polylint) - linter. was made using the Polymer utility [hydrolysis](https://github.com/Polymer/hydrolysis). Polymer-cli is supposed to include a linter, so I'm not sure if this is necessary to include as well.

### Shady DOM

webcomponents.js comes in two flavors standard and lite. The lite version contains all the polyfills except the Shadow DOM polyfill. The reason for this is that stubbing Shadow DOM is extremely inefficient and can impact performance of your application significantly!

The Shady DOM provides the same encapsulation benefits as the Shadow DOM but without the massive polyfill overhead.

### [Polymer Micro](https://www.polymer-project.org/1.0/docs/devguide/experimental#polymer-micro)

If you don't need all the features of Polymer you can use Polymer Micro as a plain wrapper around web components.