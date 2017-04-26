var gulp = require('gulp');
var gp_concat = require('gulp-concat');
var gp_rename = require('gulp-rename');
var gp_uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var gp_sourcemaps = require('gulp-sourcemaps');

gulp.task('js-build', function(){
  return gulp.src(['public/javascripts/*.js'])
    .pipe(gp_concat('concat.js'))
    .pipe(gp_rename('aplicacao.min.js'))
    .pipe(gp_uglify())
    .pipe(gulp.dest('public/javascripts/build/'));
});

gulp.task('css-build', function(){
  return gulp.src(['public/stylesheets/*.css'])
    .pipe(gp_sourcemaps.init())
    .pipe(gp_concat('concat.js'))
    .pipe(gp_rename('aplicacao.min.css'))
    .pipe(cssmin())
    .pipe(gp_sourcemaps.write('./'))
    .pipe(gulp.dest('public/stylesheets/build/'));
});

gulp.task('comprimir', function () {
  gulp.watch('public/stylesheets/*.css', ['css-build']);
  gulp.watch('public/javascripts/*.js', ['js-build']);
});