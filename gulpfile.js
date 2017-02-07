const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
// const sourcemap = require('gulp-sourcemaps');
const nodemon = require('gulp-nodemon');
// const annotate = require('gulp-ng-annotate');

const paths = {
    jsSource: ['./public/images/angular-loading-bar/build/loading-bar.js', './public/app/app.js', './public/app/**/*.js'],
    scssSource: './public/app/**/**/*.scss',
    server: './server/server.js'
};

gulp.task('serve', () => {
    nodemon({
        'script': paths.server
    })
})

gulp.task('js-bundle', () => {
    gulp.src(paths.jsSource)
        // .pipe(sourcemap.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('all.js'))
        // .pipe(sourcemap.write('./'))
        .pipe(gulp.dest('./public/dist'))
});

gulp.task('scss-bundle', () => {
    gulp.src(paths.scssSource)
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./public/dist'))
});

gulp.task('watch', () => {
    gulp.watch(paths.jsSource, ['js-bundle'])
    gulp.watch(paths.scssSource, ['scss-bundle'])
});


// gulp.task('default', ['watch', 'js-bundle', 'scss-bundle']);
gulp.task('default', ['watch', 'serve', 'js-bundle', 'scss-bundle']);
