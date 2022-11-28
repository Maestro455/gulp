const { src, dest } = require('gulp');

//конфигурация
const path = require("../config/path.js")
const app = require("../config/app.js")


// плагины
const plumber = require('gulp-plumber')
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const rename = require('gulp-rename')
const shorthand = require('gulp-shorthand')
const size = require('gulp-size')
const groupCssMediaQueries = require('gulp-group-css-media-queries')
const sass = require('gulp-sass')(require("sass"));
const sassGlob = require('gulp-sass-glob');
const concat = require('gulp-concat')
const webpCss = require('gulp-webp-css')




//форматирование scss
const scss = () => {
    return src(path.scss.src, { sourcemaps: true })
        .pipe(plumber(app.plumberSCSS))
        .pipe(concat('style.scss'))
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(groupCssMediaQueries())
        .pipe(size(app.preSize))
        .pipe(dest(path.scss.dest, { sourcemaps: true }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(csso())
        .pipe(size(app.postSize))
        .pipe(dest(path.scss.dest, { sourcemaps: true }))
};

module.exports = scss;