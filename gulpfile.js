var gulp = require('gulp');
var watch = require('gulp-watch');
var sync = require('browser-sync').create();



/*
  Initialize browser-sync server and watch dist/ directory.
*/
gulp.task('init-live', function() {

  sync.init({
    server: {
      baseDir: "dist/"
    }
  });

  gulp.watch('dist/**', sync.reload);

});



/*
  Return stream of changes to src/ directory, pipe changes to dist/.
*/
gulp.task('watch-src', ['init-live'], function() {

  return watch('src/**', { ignoreInitial: false })
    .pipe(gulp.dest('dist/'));

});



/*
  Run init-live and watch-src tasks.
*/
gulp.task('default', ['init-live','watch-src']);