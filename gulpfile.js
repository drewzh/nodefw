'use strict';

var gulp = require('gulp'),
    to5 = require('gulp-6to5'),
    notify = require('gulp-notify');

gulp.task('default', function () {
    return gulp.src(['src/**/*.js'])
        .pipe(to5())
        .pipe(gulp.dest('dist'))
        .pipe(notify({message: 'NodeFW build process complete!', onLast: true}));
});
