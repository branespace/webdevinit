"use strict";

var fs = require('fs');

exports.writeFile = function(path, data, callback){
    fs.writeFile(path, data, callback);
};