"use strict";

var exec = require('child_process').execSync;

module.exports = function (config, files, callback) {
    exec('git init');
    exec('git add ' + files.join(' '));
    exec('git commit -m "Initial Commit"');
    callback();
};