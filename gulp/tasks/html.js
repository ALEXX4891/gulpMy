import fileinclude from "gulp-file-include"; // npm i gulp-file-include -D //плагни для подключения файлов внутри html
import webpHtmlNosvg from "gulp-webp-html-nosvg"; // npm i gulp-webp-html-nosvg -D // плагин для форматирования изображений в формат webp
import versionNumber from "gulp-version-number"; // npm i gulp-version-number -D // плагин для работы с версиями, что бы избежать кеширования
import map from "gulp-sourcemaps"; // npm i gulp-sourcemaps -D

export const html = () => {
  return app.gulp.src(app.path.src.html) // выбираем файлы
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "HTML",
        message: "Error: <%= error.message %>" // требуется включить уведомления в windows!!!
      })
    ))
    // .pipe(app.plugins.if(
    //   app.isDev,
    //   map.init()
    // ))
    .pipe(fileinclude()) // подключаем файлы внутри html
    .pipe(app.plugins.replace(/@img\//g, 'img/')) // заменяем пути к изображениям
    .pipe(app.plugins.if(
      app.isBuild,
      webpHtmlNosvg()
    ))
    .pipe(app.plugins.if(
      app.isBuild,
      versionNumber({
        'value': '%DT%',
        'append': {
          'key': '_v',
          'cover': 0,
          'to': [
            'css',
            'js',
          ]
        },
        'output': {
          'file': 'gulp/version.json'
        }
      })
    )) 
    // .pipe(app.plugins.if(
    //   app.isDev,
    //   map.write(".")
    // ))
    .pipe(app.gulp.dest(app.path.build.html)) // путь куда скопируем файлы
    // .pipe(app.plugins.browserSync.stream()); // обновляем браузер
}