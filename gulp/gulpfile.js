var gulp = require('gulp')

gulp.task('task1', task1 => {
  console.log("task1");
  task1()
})

gulp.task('task2', task2 => {
  console.log("task2")
  task2()
})

// gulp4 use gulp.series
gulp.task('default', gulp.series('task1', 'task2', done => {
  console.log("default")
  done()
}))