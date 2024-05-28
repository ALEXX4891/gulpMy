export const jsLib = () => {
  return app.gulp.src(app.path.src.jsLib)
  .pipe(app.gulp.dest(app.path.build.jsLib));
};