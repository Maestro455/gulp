const { src, dest } = require('gulp');

//конфигурация
const path = require("../config/path.js")
const app = require("../config/app.js")


// плагины
const plumber = require('gulp-plumber')
const imagemin = require('gulp-imagemin')
const newer = require('gulp-newer')
const webp = require('gulp-webp')


//форматирование img
const img = () => {
    return src(path.img.src)
        .pipe(plumber(app.plumberIMG))
        .pipe(newer(path.img.dest))
        .pipe(webp())
        .pipe(dest(path.img.dest))
        .pipe(src(path.img.src))
        .pipe(newer(path.img.dest))
        .pipe(imagemin(app.imagemin))
        .pipe(dest(path.img.dest))

};

module.exports = img; 