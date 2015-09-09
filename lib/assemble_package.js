"use strict";

module.exports = function JSONtoPackage(json) {
    var newPack = {};

    newPack.name = json.name;
    newPack.description = json.description;
    newPack.version = json.version || '1.0.0';
    newPack.keywords = json.keywords ? json.keywords.split(' ') : '';
    newPack.homepage = json.homepage || '';
    newPack.license = json.license;
    newPack.author = {
        name: json.author,
        email: json.email || ''
    };
    newPack.files = ['lib', 'bin', '*.js'];
    newPack.main = json.main || 'index.js';
    newPack.bin = {};
    newPack.directories = {
        lib: 'lib',
        bin: 'bin'
    };
    newPack.scripts = {
        test: json.test
    };

    return newPack;
};