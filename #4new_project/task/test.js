const { src, dest } = require('gulp');
const fonter = require('gulp-fonter');

const test = () => {
    return src('./src/font/*')
        .pipe(fonter({
            formats: ['woff', 'ttf']
        }))
        .pipe(dest('./public/test'));
};

module.exports = test;