"use strict";

var expect = require('chai').expect,
    git = require('../lib/git_ops'),
    fs = require('fs'),
    config = {
        dest: __dirname + '/testinggit'
    },
    exec = require('child_process').exec,
    sync = require('child_process').execSync;

describe('git operations', function () {
    before(function (done) {
        fs.mkdir(config.dest, function (err) {
            fs.writeFile(config.dest + '/test', 'test', function (err) {
                git(config, ['test'], done)
            });
        });
    });
    it('should create and initial commit a git repo', function (done) {
        var hist = sync('git log').toString();
        console.log(hist);
        expect(hist.toString().indexOf('Initial Commit')).to.not.be.equal(1);
        done();
    });
    before(function (done) {
        exec('rm -r ' + __dirname + '/testinggit', function (err) {
            done();
        });
    });
});
