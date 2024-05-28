// импортируем все необходимые библиотеки:
import gulp from 'gulp'; //импортируем основной модуль gulp //npm i gulp@4.0.2 -D
import { path } from './gulp/config/path.js'; //импортируем пути
import { plugins } from './gulp/config/plagins.js'; //импортируем плагины

//передаем значения в глобальную переменную
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins
}

//импортируем задачи
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { jsLib } from './gulp/tasks/jsLib.js';
// import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { css } from './gulp/tasks/css.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
// import { css } from './gulp/tasks/css.js';


// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.css, css);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);  
  gulp.watch(path.watch.jsLib, jsLib);
}

//последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, css, js, jsLib, images));

// построение сценариев выполнения задач
// const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher));
const build = gulp.series(reset, mainTasks);

// экспорт сценариев
export { dev, build };


// выполнение задач по умолчанию
gulp.task('default', dev);