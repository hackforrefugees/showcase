var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    path = require('path'),
    handlebars = require('gulp-compile-handlebars'),
    Teams = require('./lib/teams'),
    helpers = require('./lib/helpers'),
    gutil = require('gulp-util')

var buildSass = function() {
  return gulp.src('public/stylesheets/*.scss')
    .pipe(sass())
    .pipe(minify({ cache: true }))
    .pipe(gulp.dest('./public/css'))
}

gulp.task('default', ['build-html'])

gulp.task('css', buildSass)

options = {
  ignorePartials: false, //ignores the unknown footer2 partial in the handlebars template, defaults to false
  batch : ['./views/layouts', './views/partials'],
  helpers : helpers
};

gulp.task('build-html',['css'], function(){
  return Teams.loadTeams(function (result) {
    return gulp.src('./views/index.handlebars')
      .pipe(handlebars(result, options))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('./public'));
  });
})



//gulp.src('./views/layout/main.handlebars')
gulp.task('watch', function() {
  return gulp.watch('public/stylesheets/*.scss', ['css'])
})
