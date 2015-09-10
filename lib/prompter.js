"use strict";

var prompt = require('prompt'),
    schema = require('./package_properties'),
    fs = require('fs'),
    assemblePackage = require('./assemble_package');

exports.writePackage = function (config, data, callback) {
    var pack = assemblePackage(data);

    fs.writeFile(config.dest + '/package.json',
        JSON.stringify(pack, null, 4), function (err) {
            if (err) {
                return err;
            }
            console.log('Created package.json');
            callback();
        });
};

exports.prompt = function getPackageProperties(config, input, callback) {
    prompt.start();

    prompt.get(schema, function (err, data) {
        if (err) {
            return err;
        }
        callback(data);
    });
};
