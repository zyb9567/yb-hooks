const gulp = require('gulp');
const commConfig = require('../../gulpfile.js');

exports.default = gulp.series(commConfig.default);
