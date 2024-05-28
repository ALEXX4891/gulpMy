export const copy = () => {
  return app.gulp.src(app.path.src.files) // выбираем файлы для копирования
    .pipe(app.gulp.dest(app.path.build.files)); // путь куда скопируем файлы
}