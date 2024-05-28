import replace from 'gulp-replace'; //поиск и замена //npm i gulp-replace -D
import plamber from 'gulp-plumber'; //npm i gulp-plumber -D // плагин для обработки ошибок
import notify from 'gulp-notify'; //npm i gulp-notify -D // плагин для вывода ошибок в терминал
// import browserSync from 'browser-sync'; //npm i browser-sync -D // плагин для работы с браузером
import newer from 'gulp-newer'; //npm i gulp-newer -D // плагин для проверки обновлений файлов
import ifPlugin from 'gulp-if'; //npm i gulp-if -D // плагин для проверки условия

//экспортируем объект
export const plugins = {
  replace: replace,
  plumber: plamber,
  notify: notify,
  // browserSync: browserSync,
  newer: newer,
  if: ifPlugin,
}