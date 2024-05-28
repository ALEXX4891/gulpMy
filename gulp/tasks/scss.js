import * as dartSass from "sass"; // импортируем библиотеку sass //npm i sass -D
import gulpSass from "gulp-sass"; // импортируем gulp-sass //npm i gulp-sass -D
import rename from "gulp-rename"; // импортируем плагин gulp-rename //npm i gulp-rename -D

import map from "gulp-sourcemaps"; // npm i gulp-sourcemaps -D
import cleanCss from "gulp-clean-css"; // Сжатие css //npm i gulp-clean-css -D
import webpcss from "gulp-webpcss"; // вывод изображений в формат webp //npm i gulp-webpcss -D
import autoprefixer from "gulp-autoprefixer"; // добавление вендорных префиксов //npm i gulp-autoprefixer -D
import groupCssMediaQueries from "gulp-group-css-media-queries"; // Группировка медиа запросов //npm i gulp-group-css-media-queries -D

const sass = gulpSass(dartSass); // вызываем плагин gulp-sass и передаем в него функцию компиляции dartSass

export const scss = () => {
  return app.gulp
    .src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.plugins.if(
      app.isDev,
      map.init()
    ))
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(sass({
        outputStyle: "expanded"
      }).on("error", sass.logError)
    )
    .pipe(app.plugins.if(
      app.isDev,
      map.write(".")
    ))
    .pipe(app.gulp.dest(app.path.build.css)) // выгружаем НЕминифицированный css
    .pipe(app.plugins.if(
      app.isBuild,
      groupCssMediaQueries()
    ))
    .pipe(app.plugins.if(
      app.isBuild,
      autoprefixer({
        grid: true, // поддержка css grid
        overrideBrowserslist: ["last 3 versions"], //добавляет вендорные префиксы для последних 3 версий браузеров
        cascade: true,
      })
    ))
    .pipe(app.plugins.if(
      app.isBuild,
      webpcss({
        webpClass: ".webp", //добавит класс если будет поддержка webp
        noWebpClass: ".no-webp", // добавит класс если не будет поддержки webp
      })
    ))
    .pipe(app.gulp.dest(app.path.build.css)) // выгружаем НЕминифицированный css
    .pipe(app.plugins.if(
      app.isBuild,
      cleanCss()
    ))
  .pipe(
    rename({
      extname: ".min.css",
    })
  )
  // .pipe(app.gulp.dest(app.path.build.css)) // выгружаем минифицированный css
  // .pipe(app.plugins.browserSync.stream());
};
