const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const del = require('del');

gulp.task('clean', async function () {
  await del('lib/**');
  await del('es/**');
  await del('cjs/**');
});

gulp.task('cjs', function () {
  return gulp.src('src/**/*.ts').pipe(
    babel({
      configFile: '../../.babelrc',
    }).pipe(gulp.dest('lib/')),
  );
});

gulp.task('es', function () {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    module: 'ESNext',
  });
  return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'));
});

exports.default = gulp.series('clean', 'es', 'cjs');
