"use strict";

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha'),
    files = ['*/**.js', '!./node_modules/**'];

gulp.task('default', ['outerjshint', 'outermocha']);

gulp.task('outermocha', function () {
    return gulp.src(files)
        .pipe(mocha());
});

gulp.task('outerjshint', function () {
   return gulp.src(files)
    .pipe(jshint());
});
