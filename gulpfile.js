var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = {
  headerScripts: ['bower_components/modernizr/modernizr.js'],
  vendorScripts: [
  	'bower_components/jquery/jquery.min.js',
  	'bower_components/jquery.event.move/js/jquery.event.move.js'
  ],
  customScripts: ['src/js/custom/*.js', 'src/js/custom/prototypes/*.js'],
  customCss: ['src/sass/**/*.scss']
};


gulp.task('css', function(){
	return gulp.src(paths.customCss)
        .pipe(sass({style: 'compressed'}))
        .pipe(gulp.dest('_build/css'));
});

gulp.task('headerScripts', function(){
	return gulp.src(paths.headerScripts)
		.pipe(concat('header.js'))
		.pipe(uglify())
		.pipe(gulp.dest('_build/js'));
});

gulp.task('vendorScripts', function(){
	return gulp.src(paths.vendorScripts)
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(gulp.dest('_build/js'));
});

gulp.task('customScripts', function(){
	return gulp.src(paths.customScripts)
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('_build/js'));
});

gulp.task('watch', function () {
  gulp.watch(paths.customScripts, ['customScripts']);
  gulp.watch(paths.customCss, ['css']);
});

gulp.task('default', ['css', 'headerScripts', 'vendorScripts', 'customScripts']);
gulp.task('watch', ['css', 'headerScripts', 'vendorScripts', 'customScripts', 'watch']);