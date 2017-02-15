var gulp = require('gulp');
var watch = require('gulp-watch');

var browserSync = require('browser-sync').create();

// var browserify = require('browserify');
// var path = require('path');
// var webpack = require('webpack-stream');
// var WebpackDevServer = require("webpack-dev-server");

gulp.task('live', function() {

  browserSync.init({
    server: './dist'
  });

  gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'));
  
  gulp.watch('src/*').on('change', function() {

    gulp.src('src/*')
    .pipe(gulp.dest('dist/'));

    browserSync.reload();

  });

});

gulp.task('default', function() {

  console.log('gulp!');

  // var 
  // return watch('src/*', function() {

  //   gulp.src('src/*.html')
  //   // .pipe(webpack({
  //   //   watch: true,
  //   //   module: {
  //   //     loaders: [{
  //   //       test: /\.html$/,
  //   //       loader: "html-loader"
  //   //     }]
  //   //   }
  //   // }))
  //   .pipe(gulp.dest('dist/'));

  // });

});