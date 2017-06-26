var gulp        = require('gulp'),
	scss        = require('gulp-scss'),
	browserSync = require('browser-sync');

gulp.task('scss', function () {
	return gulp.src('app/scss/**/*.scss')
	.pipe(scss())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream:true}))
});	

gulp.task('browser-sync',function(){
	browserSync({
		server:{
			baseDir:'app'
		},
		notify:false
	});
});

gulp.task('watch',['browser-sync','scss'], function(){
	gulp.watch('app/scss/**/*.scss',['scss']);
	gulp.watch('app/*.html',browserSync.reload);
	gulp.watch('app/js/**/*.js',browserSync.reload);
});
