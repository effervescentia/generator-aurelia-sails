var gulp = require('gulp'),
    git = require('gulp-git'),
    filter = require('gulp-filter'),
    bump = require('gulp-bump'),
    tag_version = require('gulp-tag-version');

/**
 * Bumping version
 */
function inc(importance) {
    return gulp.src(['./package.json'])
        .pipe(bump({ type: importance }))
        .pipe(gulp.dest('./'))
        .pipe(git.commit('Bumps for new ' + importance + ' release.'))
        .pipe(filter('package.json'))
        .pipe(tag_version());
}

gulp.task('patch', function() {
    return inc('patch');
});
gulp.task('feature', function() {
    return inc('minor');
});
gulp.task('release', function() {
    return inc('major');
});
