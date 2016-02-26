var gulp = require('gulp');
// var browserify = require('gulp-browserify');
var watch = require('gulp-watch');
var shell = require('gulp-shell');
var sass = require('gulp-sass');

gulp.task('browserify', shell.task([
  'browserify -t babelify ./src/main.js -o bundle.js',
]));

 
gulp.task('sass', function () {
  gulp.src('./src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});


gulp.task('default', ['browserify', 'sass'], function () {
    gulp.watch(['./src/**/*.js'], ['browserify']);
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});