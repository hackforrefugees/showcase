var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify-css'),
    path = require('path'),
    app = require('./app'),
    handlebars  = require('gulp-static-handlebars'),
    Teams = require('./lib/teams'),
    gutil = require('gulp-util')

var buildSass = function() {
  return gulp.src('public/stylesheets/*.scss')
    .pipe(sass())
    .pipe(minify({ cache: true }))
    .pipe(gulp.dest('public/css'))
}

gulp.task('default', ['serve'])

gulp.task('css', buildSass)

gulp.task('serve', ['watch', 'server'])

gulp.task('server', function() {
  app.set('port', process.env.PORT || 3000)

  var server = app.listen(app.get('port'), function() {
    gutil.log('Express server listening on port ' + server.address().port)
  })
})



Teams.loadTeams(function (result) {
  //gulp.src('./views/layouts/main.handlebars')
  gulp.src('./views/index.handlebars')
    .pipe(
     handlebars(/*{defaultLayout: 'main'}, {
      partials: gulp.src('./views/partials/*.handlebars'),
      defaultLayout: 'main',
      helpers: './lib/helpers/*.*'
    })
    ).pipe(gulp.dest('./dist'));
});

//gulp.src('./views/layout/main.handlebars')
gulp.task('watch', function() {
  return gulp.watch('public/stylesheets/*.scss', ['css'])
})
