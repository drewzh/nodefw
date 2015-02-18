'use strict';

var gulp = require('gulp'),
    babel = require('gulp-babel'),
    notify = require('gulp-notify');

gulp.task('default', function () {
    return gulp.src(['src/**/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('dist'))
        .pipe(notify({message: 'NodeFW build process complete!', onLast: true}));
});
