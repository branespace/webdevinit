"use strict";

module.exports = function() {
    var prompt = require('./prompter'),
        copyFiles = require('./copy_files'),
        makeDirectories = require('./make_directories'),
        installPacks = require('./install_package'),
        git = require('./git_ops'),
        controller = require('./async_controller'),
        config = {},
        res = [];

    config.src = __dirname + '/../starterfiles';
    config.dest = process.cwd();

    controller.constructTask(prompt.prompt);
    controller.constructTask(prompt.writePackage);
    controller.constructTask(copyFiles);
    controller.constructTask(makeDirectories, ['test', 'bin', 'lib']);
    controller.constructTask(installPacks, ['gulp', 'gulp-mocha', 'gulp-jshint',
        'mocha', 'chai']);
    controller.constructTask(git, ['gulpfile.js', 'index.js',
        'README.md', 'package.json']);

    controller.executeTasks(config);
};