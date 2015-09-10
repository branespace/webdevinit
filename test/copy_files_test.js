"use strict";

var expect = require('chai').expect,
    assemble = require('../lib/assemble_package'),
    fs = require('fs'),
    copy = require('../lib/copy_files'),
    config = {
        src: __dirname + '/testing1',
        dest: __dirname + '/testing2'
    },
    oldDir,
    newDir;

describe('copy file', function () {
    before(function (done) {
        fs.mkdir(config.src, function () {
            fs.mkdir(config.dest, function () {
                fs.writeFile(config.src + '/test.txt', 'this is a test', function () {
                    fs.readdir(config.dest, function (err, data) {
                        oldDir = data;
                        copy(config, data, done);
                    });
                });
            });
        });
    });
    it('should create a new file', function () {
        fs.readdir(config.dest, function (err, data) {
            newDir = data;
            expect(oldDir).to.be.deep.equal([]);
            expect(newDir).to.be.deep.equal(['test.txt']);
        });
    });
    it('should copy data exactly', function (done) {
        fs.readFile(config.dest + '/test.txt', function (err, data) {
            expect(data.toString()).to.be.equal('this is a test');
            done();
        });
    });
    after(function (done) {
        fs.unlink(config.dest + '/test.txt', function (err) {
            fs.rmdir(config.dest, function (err) {
                fs.unlink(config.src + '/test.txt', function (err) {
                    fs.rmdir(config.src, function(err){
                        done();
                    });
                });
            });
        });
    });
});
