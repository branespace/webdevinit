"use strict";

var expect = require('chai').expect,
    assemble = require('../lib/assemble_package'),
    data = {
        name: 'test',
        description: '',
        version: 1.0,
        keywords: "key",
        homepage: '',
        license: 'MIT',
        author: 'me',
        email: '',
        main: '',
        test: ''
    },
    expected = {
        name: 'test',
        description: '',
        version: 1,
        keywords: ['key'],
        homepage: '',
        license: 'MIT',
        author: {name: 'me', email: ''},
        files: ['lib', 'bin', '*.js'],
        main: 'index.js',
        bin: {},
        directories: {lib: 'lib', bin: 'bin'},
        scripts: {test: ''}
    };


describe('async module', function () {
    it('should execute sequential tasks with params', function () {
        expect(assemble(data)).to.be.deep.equal(expected);
    });
});
