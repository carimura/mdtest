const { series, parallel, src, dest }   = require('gulp');
var fs                                  = require('fs');
var frontMatter                         = require('gulp-front-matter');
var markdown                            = require('gulp-markdown');
var wrap                                = require('gulp-wrap');

function pages() {
    return src('app/pages/**/*.md')
        .pipe(frontMatter())
        .pipe(markdown())
        .pipe(wrap(function (data) {
            return fs.readFileSync('app/templates/pages/' + data.file.frontMatter.layout).toString()
        }, null, {engine: 'nunjucks'}))
        .pipe(dest('app'))
}

exports.pages = pages;