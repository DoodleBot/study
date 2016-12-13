# Code Splitting

dynamic chunks that load async with require.js



Loaders convert the assets into base64, removing the requirement for the browser to have to make a request.

## Multiple Pages

You can define what bundles get loaded on different pages. May be useful to match up these outputs to templates within AEM.

## Commons Chunk
Can have items automatically pulled out of chunks and into common if it's used in multiple pages.

## ExtractTextPlugin

Can pull out css from js into external css files

## Multiple builds

webpack.dev.js
webpack.prod.js

## Post and Pre Loaders

## Loaders to try

* eslint-loader
* css-loader - compiles css into js bundle.
* style-loader - converts css in js bundle to useable format.
* url-loader - loads asset into data-url as base-64. Good for inlining smaller images so they don't create another server request.
* file-loader - loads asset from file.

## Plugins to try

* UglifyJsPlugin
* DefinePlugin
* ExtractTextPlugin

## Inject Loader

Can use this to inject values for unit testing, which 
