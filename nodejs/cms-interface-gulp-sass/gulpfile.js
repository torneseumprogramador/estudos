var gulp = require('gulp');
var nodemon = require('nodemon');
var sass = require('gulp-sass');
var gp_concat = require('gulp-concat');
var gp_rename = require('gulp-rename');
var gp_uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var gp_sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');

gulp.task('js-build', function(){
  return gulp.src(['public/javascripts/*.js'])
    .pipe(gp_concat('concat.js'))
    .pipe(gp_rename('aplicacao.min.js'))
    .pipe(gp_uglify())
    .pipe(gulp.dest('public/javascripts/build/'))
});

gulp.task('css-build', function () {
  return gulp.src('public/stylesheets/sass/aplicacao.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gp_sourcemaps.init())
    .pipe(gp_rename('aplicacao.min.css'))
    .pipe(cssmin())
    .pipe(gp_sourcemaps.write('./'))
    .pipe(gulp.dest('public/stylesheets/'))
});

gulp.task('reload', function(){
  return gulp.src(['app/**/**'])
    .pipe(livereload());
});

gulp.task('server', function() {
  nodemon({
    script: 'bin/www',
    watch: [
      "bin/www", 
      "app.js", 
      "app/**/**"
    ],
    ext: 'js'
  }).on('restart', () => {
    console.log("::: Server realod :::");
  });
});

gulp.task('default', ['server'], function () {
  livereload.listen();
  gulp.watch('public/stylesheets/sass/**/*.scss', ['css-build', 'reload']);
  gulp.watch('public/javascripts/*.js', ['js-build', 'reload']);
  gulp.watch('app/**/**', ['reload']);
});