var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync');


gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },

        notify: false
    });
     watch('./app/*.pug', function() {
        gulp.start('PugRender');
    });

    watch('./app/*.html', function() {
        browserSync.reload();
    });

    watch('./app/assets/sass/**/*.scss', function() {
        gulp.start('cssInject');
    })
});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
})