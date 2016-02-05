var gulp = require('gulp');

var del = require("del"); // cleaner
var ts = require('gulp-typescript'); // typescript compile
var concat = require('gulp-concat'); // combine files
var jasmine = require("gulp-jasmine"); // testing
var nugetpack = require('gulp-nuget-pack'); // pack up

function getTS() {
    // typescript compiler
    var tsProject = ts.createProject({
        declaration: true,
        noExternalResolve: true,
        module: "amd",
        noImplicitAny: true,
        removeComments: true
    });
    return tsProject;
}

// RUN ALL
gulp.task("default", ["clean", "compile", "compile:tests", "runTests"], function (cb) {
    console.log("Gulp Finished");
    cb();
})

// Clean up output folders before compile
gulp.task("clean", function (cb) {
    return del([
        'release/**/*',
        'spec/**/*'
    ]);
})

// compile and combine TS output
gulp.task('compile', function () {
    console.log("compile start");
    var tsResult = gulp.src('src/**/*.ts')
        .pipe(ts(getTS()));

    return tsResult.js
        .pipe(concat("Test.js")) // merge output                    
        .pipe(gulp.dest('release/js'));
});

// compile test code into spec/tests.js 
gulp.task("compile:tests", function () {
    console.log("compile:tests start");
    // use non-AMD compiler
    var tsProject = ts.createProject({
        declaration: true,
        noExternalResolve: true,
        noImplicitAny: true,
        removeComments: true
    });
    var tsResult = gulp.src('tests/**/*.ts')
        .pipe(ts(tsProject));

    return tsResult.js
        .pipe(concat("tests.js")) // merge all tests
        .pipe(gulp.dest('spec'));
});

// compile TS if ts files change
gulp.task('watch', ['default'], function () {
    gulp.watch('src/**/*.ts', ['default']);
});

// run jasmin unit tests?
gulp.task('runTests', function () {
    console.log("runTests start");
    // gulp-jasmine works on filepaths so you can't have any plugins before it 
    return gulp.src('spec/tests.js')
        .pipe(jasmine());
});

gulp.task('nuget-pack', function (callback) {
    nugetpack({
        id: "MyPackage",
        version: "1.0.0",
        authors: "Some author",
        description: "Description of my package."
    },

        [
            "release/js/*.js",
            "readme.md"
        ],

        callback
        );
});