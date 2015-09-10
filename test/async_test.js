"use strict";

var async = require('../lib/async_controller');
var expect = require('chai').expect,
    config = {
        times: 0
    };

describe('async module', function () {
    before(function(done){
        config.done = done;
        async.constructTask(testTask, null);
        async.constructTask(passTestTask, null);
        async.constructTask(testPassTask, null);
        async.executeTasks(config);
    });
    it('should execute sequential tasks with params', function () {
        expect(config.times).to.be.equal(3);
    });
});

//async helpers
function passTestTask(config, data, callback) {
    config.times++;
    callback('test');
}
function testTask(config, data, callback) {
    config.times++;
    callback();
}
function testPassTask(config, data, callback) {
    if (data === 'test') {
        config.times++;
        config.done();
    }
    callback();
}