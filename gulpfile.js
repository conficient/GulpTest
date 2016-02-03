var gulp = require('gulp');
var ts = require('gulp-typescript');

//
//gulp.watch('scr/**/*.ts', function(event) {
//  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//});
//

var tsOptions = {
    module: "amd",
    noImplicitAny: true, 
	out: 'output.js',
    removeComments: true
};

gulp.task('default', function () {
	return gulp.src('src/**/*.ts')
		.pipe(ts(tsOptions))
		.pipe(gulp.dest('built/local'));
});