const { src, dest, series, watch } = require('gulp');

// styles
const scss = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssMinify = require('gulp-clean-css');

function styles() {
    return src('./src/styles/**/*.scss')
        .pipe(scss())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(cssMinify())
        .pipe(dest('./dist/styles/'));
}

// scripts
const jsMinify = require('gulp-terser');

function scripts() {
    return src('./src/js/**/*.js')
        .pipe(jsMinify())
        .pipe(dest('./dist/js/'))
}

// fonts
function fonts() {
    return src('./src/assets/fonts/**/*.ttf')
        .pipe(dest('./dist/assets/fonts/'));
}


// watchTask
function watchTask() {
    watch(
        ['./src/styles/**/*.scss', './src/js/**/*.js'],
        series(styles, scripts, fonts)
    );
}

exports.default = series(styles, scripts, fonts, watchTask);