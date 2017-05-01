var gulp = require('gulp');
    rename = require('gulp-rename');
    urlAdjuster =require('gulp-css-url-adjuster');

gulp.task('copyPHP',function(){
    gulp.src('./wp/*.php')
        .pipe(gulp.dest('C:/xampp/htdocs/barberwild/wp-content/themes/barberwild'));
});

gulp.task('copyCSS',function(){
    gulp.src('./app/temp/styles/styles.css')
        .pipe(rename('style.css'))
        .pipe(urlAdjuster({
            replace:['../../assets/','.']
        }))
        .pipe(gulp.dest('C:/xampp/htdocs/barberwild/wp-content/themes/barberwild/'));
});

gulp.task('copyJS',function(){
    gulp.src('./app/temp/scripts/App.js')
        .pipe(rename('scripts.js'))
        .pipe(gulp.dest('C:/xampp/htdocs/barberwild/wp-content/themes/barberwild/'))
});