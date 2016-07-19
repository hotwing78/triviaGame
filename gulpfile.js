var gulp = require('gulp'); // npm install gulp
var sass = require('gulp-sass'); // npm install gulp-sass
var browserify = require('gulp-browserify') // npm install gulp-browserify



gulp.task('default', ['html','css', 'js'])

gulp.task('css', function (){
  gulp.src('./main.css')
  .pipe(sass())
  .pipe(gulp.dest('./public'))
});


gulp.task('html', function () {
    gulp.src('./templates/*.html').pipe(gulp.dest('./public/templates'));

    return gulp.src('./index.html')
        .pipe(gulp.dest('./public'));
});

gulp.task('js', function(){
  gulp.src('./js/app.js')
    .pipe(browserify())
    .pipe(gulp.dest('./public/js'))
});

gulp.task('js', function(){
  gulp.src('./js/*/*.js')
    .pipe(browserify())
    .pipe(gulp.dest('./public/js'))
});

gulp.task('watch', function(){
  gulp.watch('./main.css', ['css']);
  gulp.watch('./index.html', ['html']);
  gulp.watch('./js/*.js', ['js']);
  gulp.watch('./js/*/*.js', ['js']);
  gulp.watch('./templates/*.html', ['html']);
});
