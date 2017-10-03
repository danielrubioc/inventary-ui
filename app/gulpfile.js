// Include Gulp
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  usemin = require('gulp-usemin'),
  uglify = require('gulp-uglify');
  sass = require('gulp-sass');



gulp.task('default', ['watch']);

/**
 * Handle custom files
 */
gulp.task('custom-js', function () {
  return gulp.src('src/js/**/*.js')
  .pipe(concat('inventary.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js/build/'))
});

/**
 * Handle bower components from index
 */
gulp.task('usemin', function() {
    return gulp.src('index.html')
    .pipe(usemin({js: [uglify(), 'concat'],}))
    .pipe(gulp.dest('app/'));
});

gulp.task('sass', function () {
  return gulp.src('app/css/stylesheets.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css/'));
});


gulp.task('watch', function () {
  gulp.watch('src/js/**/*.js', ['custom-js']);
  gulp.watch('index.html', ['usemin']);

  gulp.watch('app/css/stylesheets.scss', ['sass']);
});
