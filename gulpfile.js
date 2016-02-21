var gulp=require("gulp"),
imagemin=require("gulp-imagemin"),
pngquant=require("imagemin-pngquant"),
concat=require("gulp-concat"),
uglify=require("gulp-uglify"),
jade=require("gulp-jade"),
sass=require("gulp-sass"),
font=require("gulp-iconfont"),
browserify=require('gulp-browserify'),
source=require("vinyl-source-stream"),
buffer=require("vinyl-buffer");
gulp.task("jas",function(){
gulp.src('modules/js/collections/*.js').
pipe(uglify()).
pipe(gulp.dest('Builds/development/js/'))

});

gulp.task("html",function(){
var cda={};
	gulp.src('modules/*.jade').
	pipe(jade({
		locals:cda
	})).
	pipe(gulp.dest('Builds/development/views/'))

});
gulp.task("htmlbase",function(){
var cda={};
	gulp.src('modules/templates/partials/*.jade').
	pipe(jade({
		locals:cda
	})).
	pipe(gulp.dest('Builds/development/views/partials/'))

});

gulp.task('jade',['html','htmlbase']);
gulp.task('js',['jas'])
	
gulp.task('styles', function() {
    gulp.src('modules/sass/modules/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('Builds/development/css/'));
});

gulp.task('imagen', () => {
	return gulp.src('modules/src/files/images/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('Builds/development/images/'));
});
gulp.task('font', () => {
	 gulp.src('modules/src/files/fonts/*')
	 .pipe(gulp.dest('Builds/development/fonts/'));
});

gulp.task('browserify', function() {
	// Single entry point to browserify 
	

    	gulp.src('./modules/js/controllers/tituloC.js')
		.pipe(browserify({
		  insertGlobals : true,
		  debug : !gulp.env.production
		}))
		.pipe(gulp.dest('./Builds/development/js/'))
});
gulp.task("default",['font','browserify','imagen','styles','htmlbase','html','js']);
