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
        .pipe(concat('main.js'))    //�ϲ�����js��main.js
        //.pipe(gulp.dest(path +'minify'))    //���main.js���ļ���
        .pipe(rename({suffix: '.min'}))   //renameѹ������ļ���
        .pipe(uglify())    //ѹ��
        .pipe(gulp.dest(folder.start +'minify'));  //���
});

gulp.task('less', function() {
    return gulp.src(path.start + 'stylesheets/**/*.less')
        .pipe(less())
        .pipe(gulp.dest(folder.dist + 'stylesheets'));
});

gulp.task('copyfile', function() {
    return gulp.src(folder.start + '/**/*.*')
        .pipe(gulp.dest(folder.dist));  //���
});


gulp.task('default', function() {
    gulp.start('minifyjs','less');
});
