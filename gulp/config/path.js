// получаем имя папки проекта:
import * as nodePath from 'path'; //импортируем модуль path
const rootFolder = nodePath.basename(nodePath.resolve()); // получаем имя папки проекта

const buildFolder = './dist'; // путь к папке с результатом
const srcFolder = './src'; // путь к папке с исходниками

export const path = { // объект с путями к файлам и папкам
  build: {
    js: `${buildFolder}/js/`,
    jsLib: `${buildFolder}/js/lib/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    files: `${buildFolder}/files/`,
    fonts: `${buildFolder}/fonts/`,
    // svgicons: `${srcFolder}/svgicons/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    jsLib: `${srcFolder}/js/lib/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    css: `${srcFolder}/scss/*.css`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    // svgicons: `${srcFolder}/svgicons/*.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`, //следить за JS файлами в папке js
    jsLib: `${srcFolder}/js/lib/*.js`, //следить за JS файлами в папке js
    scss: `${srcFolder}/scss/**/*.scss`, //следить за SCSS файлами в папке scss
    css: `${srcFolder}/scss/**/*.css`, //следить за CSS файлами в папке scss
    html: `${srcFolder}/**/*.html`, //следить за HTML файлами в папке src
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`, //следить за изображениями
    files: `${srcFolder}/files/**/*.*`, //следить за файлами
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: '',
}

