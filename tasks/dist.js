'use strict';

//////////////////////////////
// Requires
//////////////////////////////
var paths = require('compass-options').paths(),
    rename = require('gulp-rename'),
    sourcemap = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

//////////////////////////////
// Internal Vars
//////////////////////////////
var toDist = [
  paths.js + '/**/*.js',
  '!' + paths.js + '/**/*.min.js'
];

var placeDist = 'dist';

//////////////////////////////
// Export
//////////////////////////////
module.exports = function (gulp, distPaths, outPath) {
  // Run once
  gulp.task('dist', function (done) {
    distPaths = distPaths || toDist;
    outPath = outPath || placeDist;

    gulp.src(distPaths)
      .pipe(rename({
        extname: '.min.js'
      }))
      .pipe(sourcemap.init())
      .pipe(uglify())
      .pipe(sourcemap.write('./'))
      .pipe(gulp.dest(outPath));
  });
}
