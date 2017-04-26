var chalk = require('chalk');

var __log = console.log;
var __info = console.info;
var __warn = console.warn;
var __error = console.error;

exports.uninstall = function() {
  console.log = __log
  console.info = __info
  console.warn = __warn
  console.error = __error
}

exports.install = function() {
  console.log = function() { __log.call(console, chalk.green(Array.prototype.slice.call(arguments))) }
  console.info = function() { __info.call(console, chalk.blue(Array.prototype.slice.call(arguments))) }
  console.warn = function() { __warn.call(console, chalk.yellow(Array.prototype.slice.call(arguments))) }
  console.error = function() { __error.call(console, chalk.red(Array.prototype.slice.call(arguments))) }
}
