const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');


// Nueva tarea para compilar handlebars.js
gulp.task('handlebars', function () {
  return gulp.src('src/js/handlebars.js') // Ruta a tu archivo handlebars.js
    .pipe(babel({ presets: ['@babel/env'] })) // Compilar usando Babel si es necesario
    .pipe(concat('handlebars.min.js')) // Concatenar y renombrar el archivo si lo deseas
    .pipe(uglify()) // Minificar el archivo resultante
    .pipe(gulp.dest('public/js')); // Ruta donde se guardará el archivo compilado
});



gulp.task('scripts', function () {
  return gulp.src([
    'src/js/*.js', // Ruta a tus archivos JS fuente
  ])
  .pipe(babel({ presets: ['@babel/env'] })) // Compilar usando Babel
  .pipe(concat('main.min.js')) // Concatenar todos los archivos en uno solo
  .pipe(uglify()) // Minificar el archivo resultante
  .pipe(gulp.dest('public/js')); // Ruta donde se guardarán los archivos compilados
});

gulp.task('styles', function () {
  return gulp.src('src/less/styles.less') // Ruta a tu archivo LESS principal
    .pipe(less()) // Compilar el archivo LESS
    .pipe(cleanCSS()) // Minificar el archivo CSS resultante
    .pipe(gulp.dest('public/css')); // Ruta donde se guardará el archivo CSS compilado
});



gulp.task('watch', function () {
  gulp.watch('src/js/*.js', gulp.series('scripts')); // Vigilar cambios en archivos JS
  gulp.watch('src/less/*.less', gulp.series('styles')); // Vigilar cambios en archivos LESS
  gulp.watch('src/js/handlebars.js', gulp.series('handlebars')); // Vigilar cambios en handlebars.js
});

gulp.task('default', gulp.series('scripts', 'styles', 'handlebars', 'watch')); // Agregar 'handlebars' a la tarea default
