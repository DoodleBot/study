generate the package.json file.

`npm init`

## Gulp

If using gulp as build tool, install and add dependency to package.json file.

`npm install --save-dev gulp`

Then create the gruntfile.js file with the following stub code:

    var gulp = require('gulp');

    gulp.task('default', function() {
      // place code for your default task here
    });

Add gulp-postcss and gulp-sourcemaps support

`npm install --save-dev gulp-postcss`
`npm install --save-dev gulp-sourcemaps`

Add css task to gulpfile

    gulp.task('css', function () {
    var postcss    = require('gulp-postcss');
    var sourcemaps = require('gulp-sourcemaps');

    return gulp.src('src/**/*.css')
        .pipe( sourcemaps.init() )
        .pipe( postcss([ require('autoprefixer'), require('precss') ]) )
        .pipe( sourcemaps.write('.') )
        .pipe( gulp.dest('build/') );
    });

## Plugins

Install postcss plugins

`npm install --save-dev autoprefixer`
`npm install --save-dev precss`

etc

## Sublime

Install the following Sublime plugins:

* [PostCSS Sorting](https://packagecontrol.io/packages/PostCSS%20Sorting)
* [PostCSS Syntax Highlighting](https://packagecontrol.io/packages/Syntax%20Highlighting%20for%20PostCSS)

Set the project level preferences in the following file:

`.sublime-project`

example:

    {
        "settings": {
            "PostCSSSorting": {
                "sort-order": ["padding", "margin"],
                "sort-on-save": true
            }
        }
    }

### Installing Stylelint to Sublime

* install the sublime plugin [Sublime Linter - Stylelint](https://github.com/kungfusheep/SublimeLinter-contrib-stylelint)
* Add node path to Sublime Linter user settings file under osx ("/usr/local/bin/node")
* Add the stylelint config to the project [Stylelint config](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md)
* After it adds stylelint to linters list in Sublime Linter user settings, change @disbled to false
