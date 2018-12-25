var gulp = require('gulp');

var sass = require('gulp-sass');

var server = require('gulp-webserver');

var list = require("./src/mock/data.json");

let url = require("url");

let path = require("path");

let fs = require("fs");

gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})

gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('sass'))
})

gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: 9090,
            open: true,
            middleware: function(req, res, next) {
                let pathname = url.parse(req.url).pathname;
                if (pathname == "/api/list") {
                    res.end(JSON.stringify({ "code": 0, data: list }))
                } else if (pathname == "/favicon.ico") {
                    return
                } else {
                    pathname = pathname == "/" ? "index.html" : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, "src", pathname)))
                }
            }
        }))
})

gulp.task('dev', gulp.series('sass', 'server', 'watch'))