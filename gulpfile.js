var gulp = require('gulp');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');
var nugetpack = require('gulp-nuget-pack');

//
//gulp.watch('scr/**/*.ts', function(event) {
//  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//});
//

var tsProject = ts.createProject({
	declaration: true,
	noExternalResolve: true,
    module: "amd",
    noImplicitAny: true, 
    removeComments: true
});

gulp.task('tsc', function () {
    var tsResult = gulp.src('src/**/*.ts')
					.pipe(ts(tsProject));

    return tsResult.js
        .pipe(concat("Test.js")) // merge output                    
		.pipe(gulp.dest('release/js'));
});

gulp.task('watch', ['default'], function() {
    gulp.watch('src/**/*.ts', ['default']);
});


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