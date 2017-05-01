var gulp =require('gulp');
     pug=require('gulp-pug2');

    gulp.task('PugRender',function(){
        return gulp.src('./app/**/*.pug')
        .pipe(pug())
        .on('error',function(errorinfo){
            console.log(errorinfo.toString());  
            this.emit('end');
        })
        .pipe(gulp.dest('./app/'))
    });