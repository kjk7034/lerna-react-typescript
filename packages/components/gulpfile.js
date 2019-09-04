const gulp = require('gulp')
const through = require('through2')

const paths = {
  less: 'src/**/*.less'
}

gulp.task('copy:less', gulp.series(() =>

  gulp
  .src([paths.less])
  .pipe(
    through.obj(function clone(file, content, next) {
      this.push(file.clone())
      next()
    })
  )
  .pipe(gulp.dest('lib'))
))
gulp.task('start', () => {
  gulp.watch(paths.less, gulp.series('copy:less'))
})

gulp.task('build', gulp.series('copy:less'))
