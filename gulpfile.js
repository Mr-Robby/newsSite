var gulp = require('gulp');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');

var autoprefix = new LessAutoprefix({ browsers: ['last 10 iOS versions', 'last 3 Chrome versions', 'last 3 ChromeAndroid versions', 'last 3 ff versions', 'ie 10'] });

gulp.task('less', function () {
    return gulp.src('./less/**/*.less')
        .pipe(less({
            paths: [ '/' ],
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('./css/'));
});

gulp.task('default', ['less', 'watch']);

gulp.task('watch', function() {
    gulp.watch(['./less/**/*.less'], ['less']);
});