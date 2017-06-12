var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');

gulp.task('js', function () {
    gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

gulp.task('sass', function () {
  return gulp.src('css/style.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('imagemin', function () {
    gulp.src('images/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('images'));
});

gulp.task('default', ['js', 'sass', 'imagemin'], function() {
    console.log('Gulp Gulp Gulp!');
});