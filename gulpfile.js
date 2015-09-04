var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var electron = require('electron-connect').server.create();

var srcDir = 'src';
var libDir = 'build';

gulp.task('compile', function(){
  return gulp.src(srcDir + '/js/**/*.{js,jsx}')
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      stage: 0
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(libDir));
});

gulp.task('start', ['compile'], function(){
  electron.start();
  gulp.watch(srcDir + '/**/*.{js,jsx}', ['compile']);
  gulp.watch(['./src/js/js.js'], electron.restart);
  gulp.watch(['./src/html/index.html', libDir + '/**/*.{html,js,css}'], electron.reload);
});
