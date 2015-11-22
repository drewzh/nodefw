'use strict';

var gulp = require('gulp'),
    notify = require('gulp-notify');

gulp.task('build', function(){
    return gulp.src(['src/**/*.js'])
        .pipe(gulp.dest('dist'))
        .pipe(notify({message: 'NodeFW build process complete!', onLast: true}));
});

gulp.task('default', ['build']);
