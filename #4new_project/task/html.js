const { src, dest } = require('gulp');

//конфигурация
const path = require("../config/path.js")
const app = require("../config/app.js")


// плагины
const plumber = require('gulp-plumber')
const fileInclude = require('gulp-file-include')
const webpHtml = require('gulp-webp-html')
// const htmlmin = require('gulp-htmlmin')
// const size = require('gulp-size')

//форматирование html
const html = () => {
    return src(path.html.src)
        .pipe(plumber(app.plumberHTML))
        .pipe(fileInclude())
        .pipe(webpHtml())
        // .pipe(size(app.preSize))
        // .pipe(htmlmin(app.htmlmin))
        // .pipe(size(app.postSize))
        .pipe(dest(path.html.dest))
};

module.exports = html;