const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

//конфигурация
const path = require("./config/path.js")

//задачи 
const clear = require("./task/clear.js")
const html = require("./task/html.js")
const scss = require("./task/scss.js")
const js = require("./task/js.js")
const img = require("./task/img.js")
const font = require("./task/font.js")



//сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
}

//наблюдение
const watcher = () => {
    watch(path.html.watch, html).on("all", browserSync.reload)
    watch(path.scss.watch, scss).on("all", browserSync.reload)
    watch(path.js.watch, js).on("all", browserSync.reload)
    watch(path.img.watch, img).on("all", browserSync.reload)
    watch(path.font.ready, font).on("all", browserSync.reload)

}


const build = series(
    clear,
    parallel(html, scss, js, img, font),
)

const dev = series(
    build,
    parallel(watcher, server)
)

//вызов задачи
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;




//сборка
exports.dev = dev;
exports.build = build;
