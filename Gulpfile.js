/**
 * Created by David Maser on 15/05/2017.
 */
/**
 * Created by David Maser on 13/04/2017.
 */
let gulp = require('gulp');
let sass = require('gulp-sass');

let input = './src/stylesheets/SCSS/Main.scss';
let output = './src/stylesheets';

let sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed' //nested, expanded, compact, compressed
};

gulp.task('sass', () => {
    return gulp
    // Find all `.scss` files from the `stylesheets/` folder
        .src(input)
        // Run Sass on those files
        .pipe(sass(sassOptions))
        // Write the resulting CSS in the output folder
        .pipe(gulp.dest(output));
});

gulp.task('watch', () => {
    return gulp
        .watch(input,['sass'])
        .on('change', (event) => {
            console.log('file '+event.path)
        })
});


gulp.task('default', ['sass']);