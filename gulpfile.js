'use strict';
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('combine-js', function() {
    return gulp.src('public/src/**/*.js')
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public/dist'));
});

gulp.task('watch', function() {
    gulp.watch('public/src/**/*.js', ['combine-js']);
});

gulp.task('default', ['combine-js']);
