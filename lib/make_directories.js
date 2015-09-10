"use strict";

var fs = require('fs');

module.exports = function (config, dirs, callback) {
    for (var i = 0; i < dirs.length; i++) {
        fs.mkdirSync(config.dest + '/' + dirs[i]);
    }
    callback();
};
