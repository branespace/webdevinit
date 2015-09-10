"use strict";

var tasks = [],
    config;

exports.constructTask = function (func, params) {
    var taskobj = {
        func: func,
        params: params
    };
    tasks.push(taskobj);
};

exports.executeTasks = function(data){
    config = config || data;
    if(tasks.length > 0){
        var task = tasks.shift();
        task.func.call(null, config, task.params || data, exports.executeTasks);
    } else {
        console.log('Operations Complete.');
    }
};