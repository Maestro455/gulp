const { src, dest } = require('gulp');

//конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");


// плагины
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');


//форматирование js
const js = () => {
    return src(path.js.src, { sourcemaps: true })
        .pipe(plumber(app.plumberJS))
        .pipe(babel())
        .pipe(dest(path.js.dest, { sourcemaps: true })) //1ое сохранение
        .pipe(rename({ suffix: ".min" }))
        .pipe(uglify())
        .pipe(dest(path.js.dest, { sourcemaps: true }))
};

module.exports = js;