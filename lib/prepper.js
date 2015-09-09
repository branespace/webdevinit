"use strict";

var prompt = require('./prompter'),
    assemblePackage = require('./assemble_package'),
    fileOps = require('./file_ops'),
    dest = process.cwd(),
    src = __dirname;

prompt(function (data) {
    var pack = assemblePackage(data);

    fileOps.writeFile(dest + '/package.json',
        JSON.stringify(pack, null, 4), function(err){
            console.log('complete');
        });
});
