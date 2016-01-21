var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    less  = require('gulp-less'),
    rename = require('gulp-rename');

var path = require('path');

var folder = require('./gulpfile.config.js').folder;

gulp.task('minifyjs', function() {
    return gulp.src(folder.start + '/**/*.js')
        .pipe(concat('main.js'))    //合并所有js到main.js
        //.pipe(gulp.dest(path +'minify'))    //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest(folder.start +'minify'));  //输出
});

gulp.task('less', function() {
    return gulp.src(path.start + 'stylesheets/**/*.less')
        .pipe(less())
        .pipe(gulp.dest(folder.dist + 'stylesheets'));
});

gulp.task('copyfile', function() {
    return gulp.src(folder.start + '/**/*.*')
        .pipe(gulp.dest(folder.dist));  //输出
});


gulp.task('default', function() {
    gulp.start('minifyjs','less');
});
