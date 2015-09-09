"use strict";

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha'),
    files = ['*/**.js', '!./node_modules/**'];

gulp.task('default', ['jshint', 'mocha']);

gulp.task('mocha', function () {
    return gulp.src(files)
        .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('jshint', function () {
   return gulp.src(files)
    .pipe(jshint());
});