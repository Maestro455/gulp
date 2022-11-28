const { src, dest } = require('gulp');

//конфигурация
const path = require("../config/path.js")
const app = require("../config/app.js")


// плагины
const plumber = require('gulp-plumber')
const newer = require('gulp-newer')
const fonter = require('gulp-fonter')
const ttf2woff2 = require('gulp-ttf2woff2')



//форматирование font
const font = () => {
    return src(path.font.ready)
        .pipe(plumber(app.plumberFONT))
        .pipe(newer(path.font.dest))
        .pipe(fonter(app.fonter))
        .pipe(dest(path.font.dest))
        .pipe(ttf2woff2())
        .pipe(dest(path.font.dest))

};


module.exports = font; 