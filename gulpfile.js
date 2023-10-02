const gulp = require('gulp');
const handlebars = require('gulp-handlebars');
const wrap = require('gulp-wrap');
const declare = require('gulp-declare');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const less = require('gulp-less');

gulp.task('templates', () => {
  return gulp.src('src/templates/template.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true,
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('less', () => {
  return gulp.src('public/css/styles.less')
    .pipe(less())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('public/css'));
});


gulp.task('watch', function () {
    gulp.watch('public/css/**/*.less', gulp.series('less')); // Vigila los cambios en los archivos LESS
  });

gulp.task('default', gulp.parallel('templates', 'less'));





