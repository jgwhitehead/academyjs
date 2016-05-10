// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var jasmine = require('gulp-jasmine');

gulp.task('test', function () {
    gulp.src('spec/test.js')
        // gulp-jasmine works on filepaths so you can't have any plugins before it 
        .pipe(jasmine())
});

// Lint Task
gulp.task('lint', function () {
    return gulp.src('public/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Lint Task
gulp.task('lint-server', function () {
    return gulp.src('libs/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function () {
    return gulp.src('public/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function () {
    return gulp.src('public/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('public/dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/dist/js'));
});


gulp.task('copy', function () {
    gulp.src('bower_components/**/*')
        .pipe(gulp.dest('public/dist/lib'));
});

// Default Task
gulp.task('default', ['lint', 'lint-server', 'sass', 'scripts', 'test', 'copy']);