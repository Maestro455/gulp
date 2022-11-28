const { src, dest } = require('gulp');

//конфигурация
const path = require("../config/path.js")
const app = require("../config/app.js")


// плагины
const plumber = require('gulp-plumber')
const concat = require('gulp-concat')
const cssimport = require('gulp-cssimport')
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const rename = require('gulp-rename')
const shorthand = require('gulp-shorthand')
const size = require('gulp-size')
const groupCssMediaQueries = require('gulp-group-css-media-queries')
const webpCss = require('gulp-webp-css')



//форматирование css
const css = () => {
    return src(path.css.src, { sourcemaps: true })
        .pipe(plumber(app.plumberCSS))
        .pipe(concat('style.css'))
        .pipe(cssimport())
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(groupCssMediaQueries())
        .pipe(size(app.preSize))
        .pipe(dest(path.css.dest, { sourcemaps: true }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(csso())
        .pipe(size(app.postSize))
        .pipe(dest(path.css.dest, { sourcemaps: true }))
};

module.exports = css;