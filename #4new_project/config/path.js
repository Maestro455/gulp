const pathSrc = "./src";
const pathDest = "./public";

module.exports = {
    root: pathDest,

    html: {
        src: pathSrc + "/html/*.html",
        watch: pathSrc + "/html/**/*.html",
        dest: pathDest
    },

    css: {
        src: pathSrc + "/css/*.css",
        watch: pathSrc + "/css/**/*.css",
        dest: pathDest + "/css"
    },

    scss: {
        src: pathSrc + "/sass/*.{sass,scss}",
        watch: pathSrc + "/sass/**/*.{sass,scss}",
        dest: pathDest + "/css"
    },
    js: {
        src: pathSrc + "/js/*.js",
        watch: pathSrc + "/js/**/*.js",
        dest: pathDest + "/js"
    },
    img: {
        src: pathSrc + "/img/*.{jpg, png, jpeg, gif, svg}",
        watch: pathSrc + "/img/**/*.{jpg, png, jpeg, gif, svg}",
        dest: pathDest + "/img"
    },
    font: {
        ready: pathSrc + "/font/*",
        src: pathSrc + "/font/*.{eot, ttf, otf, otc, ttc, woff, woff2}",
        watch: pathSrc + "/font/**/*.{eot, ttf, otf, otc, ttc, woff, woff2}",
        dest: pathDest + "/font"
    },
}