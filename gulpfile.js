var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    path = require('path'),
    handlebars = require('gulp-compile-handlebars'),
    Teams = require('./lib/teams'),
    gutil = require('gulp-util')

var buildSass = function() {
  return gulp.src('public/stylesheets/*.scss')
    .pipe(sass())
    .pipe(minify({ cache: true }))
    .pipe(gulp.dest('public/css'))
}

gulp.task('default', ['css', 'build-html'])

gulp.task('css', buildSass)

gulp.task('build-html', function(){
  return Teams.loadTeams(function (result) {
    console.log('asdkjadkljalkdjalkdsjlakjds');
    console.log(result)
    return gulp.src('./views/index.handlebars')
      .pipe(handlebars(result))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('./dist'));
  });
})



//gulp.src('./views/layout/main.handlebars')
gulp.task('watch', function() {
  return gulp.watch('public/stylesheets/*.scss', ['css'])
})
