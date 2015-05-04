// var pickFiles = require('broccoli-static-compiler');
var funnel = require('broccoli-funnel');
var compileSass = require('broccoli-sass');
var mergeTrees = require('broccoli-merge-trees');
// var injectLivereload = require('broccoli-inject-livereload');

var projectFiles = 'public';

var styles = funnel(projectFiles, { srcDir: 'styles', destDir: 'styles' });

var images = funnel(projectFiles, { srcDir: 'images', destDir: 'images' });

var siteCss = compileSass([styles], 'styles/global.scss', 'styles/global.css');

var pages = funnel(projectFiles, { include: [new RegExp(/.html/)] });

module.exports = mergeTrees([siteCss, images, pages]);
