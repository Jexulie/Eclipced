var gulp = require('gulp');
var sass = require('gulp-sass');

var compileSass = () => {
    return gulp.src('./src/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/'));
};

var watchSass = () => {
    gulp.watch('src/*.scss', compileSass);
}

watchSass.description = "Changes Happened to *.scss Files...";

var defaultTask = gulp.parallel(watchSass);

exports.default = defaultTask;