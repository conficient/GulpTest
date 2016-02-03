var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge =require("merge2");
var concat = require('gulp-concat');

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

gulp.task('default', function () {
    var tsResult = gulp.src('src/**/*.ts')
					.pipe(ts(tsProject));

    return tsResult.js
        .pipe(concat("Test.js"))                    
		.pipe(gulp.dest('release/js'));
});

gulp.task('watch', ['default'], function() {
    gulp.watch('src/**/*.ts', ['default']);
});
