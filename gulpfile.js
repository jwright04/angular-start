var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename');

//convert and minify sass files to .css files
gulp.task('styles', function() {
  return sass('sass', { style: 'expanded' })
    .pipe(gulp.dest('css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css'));
});

//watch for sass cjamges
gulp.task('watch', function(){
	gulp.watch('sass/*.sass', ['styles']);
});
 
gulp.task('default', ['styles', 'watch'], function() {

});