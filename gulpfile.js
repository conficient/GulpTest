var gulp = require('gulp');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');
var nugetpack = require('gulp-nuget-pack');
var jasmin = require("gulp-jasmine"); //

// typescript compiler
var tsProject = ts.createProject({
	declaration: true,
	noExternalResolve: true,
    module: "amd",
    noImplicitAny: true, 
    removeComments: true
});

// compile and combine TS output
gulp.task('tsc', function () {
    var tsResult = gulp.src('src/**/*.ts')
					.pipe(ts(tsProject));

    return tsResult.js
        .pipe(concat("Test.js")) // merge output                    
		.pipe(gulp.dest('release/js'));
});

// compile TS if ts files change
gulp.task('watch', ['tsc'], function() {
    gulp.watch('src/**/*.ts', ['tsc']);
});

// run jasmin unit tests?
// -- need to separate test code from source, compile both to separate folders
// can look at how others do this


gulp.task('nuget-pack', function(callback) {
    nugetpack({
                id: "MyPackage",
                version: "1.0.0",
                authors: "Some author",
                description: "Description of my package."
            },
 
            [
                "lib/**/*.js",
                "readme.md"
            ],
 
            callback
    );
});