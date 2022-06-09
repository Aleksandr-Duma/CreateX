let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync');
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
let del = require('del');
let autoprefixer = require('gulp-autoprefixer');

gulp.task('clean', async function(){
	del.sync('docs')
});

gulp.task('scss', function(){
	return gulp.src('app/scss/**/*.scss')
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(autoprefixer({
		overrideBrowserslist: ['last 8 versions'],
        cascade: false
	}))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('css', function(){
	return gulp.src([
		'node_modules/normalize.css/normalize.css',
		'node_modules/slick-carousel/slick/slick.css'
	])
	.pipe(concat('_libs.scss'))
	.pipe(gulp.dest('app/scss'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function(){
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function(){
	return gulp.src('app/js/*.js')
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function(){
	return gulp.src([
		'node_modules/slick-carousel/slick/slick.js'
		])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
	browserSync.init({
		server: {
			baseDir: 'app/'
		}
	});
});

gulp.task('export', function(){
	let buildHtml = gulp.src('app/**/*.html')
		.pipe(gulp.dest('docs'));

	let buildCss = gulp.src('app/css/**/*.css')
		.pipe(gulp.dest('docs/css'));

	let buildJs = gulp.src('app/js/**/*.js')
		.pipe(gulp.dest('docs/js'));

	let buildFonts = gulp.src('app/fonts/**/*.*')
		.pipe(gulp.dest('docs/fonts'));

	let buildImg = gulp.src('app/img/**/*.*')
		.pipe(gulp.dest('docs/img'));
});

gulp.task('watch', function(){
	gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
	gulp.watch('app/*.html', gulp.parallel('html'));
	gulp.watch('app/js/*.js', gulp.parallel('script'));
});

gulp.task('build', gulp.series('clean', 'export'));

gulp.task('default', gulp.parallel('css', 'scss', 'js', 'browser-sync', 'watch'));