var gulp = require('gulp');
var babel = require('gulp-babel');
var tape = require('gulp-tape');
gulp.task('default', () => {
    return gulp.src([
      'js/*.js'
      ])
      .pipe(babel({
          presets: ['es2015']
      }))
      .pipe(tape())
      .pipe(gulp.dest('dist'));
});
