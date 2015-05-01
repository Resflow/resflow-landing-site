var pickFiles = require('broccoli-static-compiler');
var compileSass = require('broccoli-sass');
var mergeTrees = require('broccoli-merge-trees');
var injectLivereload = require('broccoli-inject-livereload');

var styles = pickFiles('styles', { srcDir: '/', destDir: 'assets' });

var siteCss = compileSass([styles], 'assets/global.scss', 'assets/global.css');

var publicFiles = injectLivereload('public');

module.exports = mergeTrees([siteCss, publicFiles]);
