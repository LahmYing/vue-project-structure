var gulp = require('gulp')
// series 顺序 parallel 希望以最大并发来运行
const { series, parallel } = require('gulp')
var stylus = require('gulp-stylus')


function compileStylus (cb) {
  console.log('compileStylus')
  // src 下所有 styl 文件
  return gulp.src('src/**/*.styl')
    .pipe(stylus({
      compress: false
    }))
    .pipe(gulp.dest('src/css')) // dest 输出目录
}

function build (cb) {
  console.log('build')
  cb();
}

function parallel1 (cb) {
  console.log('parallel-1')
  cb();
}
function parallel2 (cb) {
  console.log('parallel-2')
  cb();
}

// 两个 task 都含有同一 task，如下，此时建议重构
// const clean = function (cb) {
//   cb();
// };
// const css = series(clean, function (cb) {
//   cb();
// });
// const javascript = series(clean, function (cb) {
//   cb();
// });

// `build` 函数被导出（export）了，因此它是一个公开任务（public task），并且可以被 `gulp` 命令直接调用。
exports.build = build;
exports.default = series(compileStylus, build, parallel(parallel1, parallel2));

