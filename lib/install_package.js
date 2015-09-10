"use strict";

var npm = require('npm'),
    files,
    caller;

module.exports = function (config, names, callback) {
    caller = callback;
    files = names;
    npm.load({'save-dev': true}, installPackages);
};

function installPackages() {
    npm.commands.install(files, result);
}

function result(err) {
    if (err) {
        console.log(err);
    }
    caller();
}