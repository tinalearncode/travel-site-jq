var gulp = require('gulp');
var modernizr = require('gulp-modernizr');

gulp.task('createModernizr', function() {
 return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
 .pipe(modernizr({
 "options": [
 "setClasses"
 ]
 }))
 .pipe(gulp.dest('./app/temp/scripts/'));
});
