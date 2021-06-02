const PATH = "";

const gulp = require("gulp"),
    fs                    = require("fs"),
    sass                  = require("gulp-sass"),
    autoprefixer          = require("autoprefixer"),
    postcss               = require("gulp-postcss"),
    cssDeclarationSorter  = require("css-declaration-sorter"),
    mqpacker              = require("css-mqpacker"),
    reporter              = require("postcss-reporter"),
    imagemin              = require("gulp-imagemin"),
    browserSync           = require("browser-sync").create(),
    reload                = browserSync.reload,
    plumber               = require("gulp-plumber"),
    changed               = require("gulp-changed"),
    runSequence           = require("run-sequence"),
    php                   = require( "gulp-connect-php" );
require("es6-promise").polyfill();

gulp.task('sass',function(){
    const plugin = [
        autoprefixer(),
        cssDeclarationSorter({
            order:'smacss'
        }),
        mqpacker()
    ];
    return gulp.src(PATH + 'scss/**/*.scss')
      .pipe(changed(PATH + 'scss/**/*.scss'))
      .pipe(plumber({
        errorHandler:function(err){
            console.log(err.messageFormatted);
            this.emit('end');
        }
    }))
    .pipe(sass({
        outputStyle:'expanded'

    }))
    .pipe(postcss(plugin))
    .pipe(gulp.dest(PATH + 'css'))
});

//html
gulp.task('html',function(){
    return gulp.src(PATH + '**/*.html')
    .pipe(changed(PATH + '**/*.html'))
});

//js
gulp.task('js', function(){
    return gulp.src(PATH + '/js/**/*.js')
    .pipe(changed(PATH + '/js'))
});


//watchで自動で書き出す
gulp.task('default',function(){
    browserSync.init({
        server:{
            // open: 'external',
            startPath:'index.html',
            host:'192.168.10.5',
            post:3001,
        },
    });
    gulp.watch(PATH + 'scss/**/*.scss',gulp.task('sass')).on('change',reload);
    gulp.watch(PATH + 'js/**/*.js',gulp.task('js')).on('change',reload);
    gulp.watch(PATH + '**/*.html',gulp.task('html')).on('change',reload);

});

