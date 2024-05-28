import webpack from 'webpack-stream'; //npm i webpack-stream -D // плагин для работы с js
import map from "gulp-sourcemaps"; // npm i gulp-sourcemaps -D


export const js = () => {
  return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "JS",
      message: "Error: <%= error.message %>"
    })
  ))
  // .pipe(app.plugins.if(
  //   app.isDev,
  //   map.init()
  // ))
  // .pipe(webpack({
  //   mode: app.isBuild ? 'production' : 'development',
  //   output: {
  //     filename: 'app.min.js'
  //   },
  // }))
  // .pipe(app.plugins.if(
  //   app.isDev,
  //   map.write(".")
  // ))
  .pipe(app.gulp.dest(app.path.build.js))  
  // .pipe(app.plugins.browserSync.stream());
};