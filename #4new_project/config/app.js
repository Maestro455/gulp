const notify = require('gulp-notify')

module.exports = {
    htmlmin: {
        collapseWhitespace: true
    },
    preSize: {
        title: 'До сжатия'
    },
    postSize: {
        title: 'После сжатия'
    },
    plumberHTML: {
        errorHandler: notify.onError(error => ({
            title: 'HTML',
            message: error.message
        }))
    },
    plumberCSS: {
        errorHandler: notify.onError(error => ({
            title: 'CSS',
            message: error.message
        }))
    },
    plumberSCSS: {
        errorHandler: notify.onError(error => ({
            title: 'SCSS',
            message: error.message
        }))
    },
    plumberJS: {
        errorHandler: notify.onError(error => ({
            title: 'JavaScript',
            message: error.message
        }))
    },
    plumberIMG: {
        errorHandler: notify.onError(error => ({
            title: 'Image',
            message: error.message
        }))
    },
    plumberFONT: {
        errorHandler: notify.onError(error => ({
            title: 'Fonts',
            message: error.message
        }))
    },
    webpack: {
        mode: "development"
    },
    imagemin: {
        verbose: true
    },
    fonter: {
        formats: ["ttf", "woff", "eot", "svg"]
    },
}