"use strict";

var prompt = require('prompt'),
    schema = require('./package_properties');

module.exports = function getPackageProperties(callback) {
    prompt.start();

    prompt.get(schema, function (err, data) {
        if (err) return err;
        callback(data);
    });
};
