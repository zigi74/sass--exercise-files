var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError)) // Using gulp-sass
    .pipe(gulp.dest('css'))
});

// Gulp watch syntax
gulp.task('default', ['sass'], function(){
  gulp.watch('scss/**/*.scss', ['sass']); 
  // Other watchers
});