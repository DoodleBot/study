var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var stylelint = require('stylelint');
var stylefmt = require('stylefmt');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['css'], function() {
  // place code for your default task here
});

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 version']}),
        precss(),
        // stylelint({
        //     "extends": [
        //         "stylelint-config-standard"
        //         // ,
        //         // "./myExtendableConfig"
        //     ],
        //     "rules": {
        //         // "indentation": "tab"
        //     }
        // }),
        stylefmt()
    ];

    return gulp.src('src/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/'));
});
