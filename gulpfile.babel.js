import gulp from 'gulp';
import eslint from 'gulp-eslint';
import babel from 'gulp-babel';
import rename from 'gulp-rename';

import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import del from 'del';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import coveralls from 'gulp-coveralls';
import codecov from 'gulp-codecov';

const ALL_SOURCES = [
  '*.js',
  'lib/*.js',
  'test/*.js',
];

gulp.task('lint', function() {
  return gulp.src(ALL_SOURCES)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    ;
});

gulp.task('clean', function() {
  return Promise.all([del('dist/'), del('coverage/')]);
});

const bundledConfig = {
  debug: true,
  entries: 'lib/Eloqua.js',
  standalone: 'Eloqua',
};
const externalConfig = {
  debug: true,
  entries: 'lib/Eloqua.js',
  standalone: 'Eloqua',
  external: [
    'axios',
  ],
  bundleExternal: false,
};
gulp.task('build:bundled:min', function() {
  return buildBundle(bundledConfig, '.bundle.min.js', true);
});
gulp.task('build:external:min', function() {
  return buildBundle(externalConfig, '.min.js', true);
});
gulp.task('build:bundled:debug', function() {
  return buildBundle(bundledConfig, '.bundle.debug.js', false);
});
gulp.task('build:external:debug', function() {
  return buildBundle(externalConfig, '.debug.js', false);
});
gulp.task('build:components', function() {
  return gulp.src('lib/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
    ;
});
gulp.task('coveralls', () => {
  return gulp.src('coverage/lcov.info').pipe(coveralls());
});
gulp.task('codecov', () => {
  return gulp.src('coverage/lcov.info').pipe(codecov());
});

function buildBundle(options, extname, minify) {
  let stream = browserify(options)
    .transform('babelify')
    .bundle()
    .pipe(source('Eloqua.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({
      loadMaps: true,
    }));

  if (minify) {
    stream = stream.pipe(uglify());
  }

  return stream.pipe(rename({extname}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
    ;
}

gulp.task('build', gulp.series(
  //'build:bundled:min',
  //'build:external:min',
  'build:bundled:debug',
  'build:external:debug',
  'build:components',
));
gulp.task('coverage', gulp.parallel('coveralls', 'codecov'));
