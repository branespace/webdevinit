"use strict";

var fs = require('fs');

module.exports = function copyFiles(config, data, callback) {
    var fileList = fs.readdirSync(config.src);
    for (var i = 0; i < fileList.length; i++) {
        copyFile(config.src + '/' + fileList[i],
            config.dest + '/' + fileList[i]);
    }
    setTimeout(callback, 1000);
};

function copyFile(src, dest) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dest));
}