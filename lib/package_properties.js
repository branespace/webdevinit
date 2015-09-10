"use strict";

module.exports = {
    properties: {
        name: {
            description: 'Enter a project name',
            pattern: /^[^._\sA-Z][a-z0-9]{0,213}$/,
            message: 'Name cannot start with a . or _' +
            '\nName must be less than 214 caractes(including scope)' +
            '\nName must not have uppercase letters' +
            '\nName must be URL-safe',
            required: true
        },
        version: {
            description: 'Select a version number (1.0.0)',
            pattern: /\S\.\S/,
            message: 'Should be a semantic version',
            required: false
        },
        description: {
            description: 'Enter a description for the package',
            required: false
        },
        keywords: {
            description: 'Enter some keywords',
            required: false
        },
        homepage: {
            description: 'Enter a homepage URL',
            required: false
        },
        license: {
            description: 'Select a license (MIT)',
            required: false
        },
        author: {
            description: 'Enter your name',
            required: true
        },
        email: {
            description: 'Enter your email',
            required: false
        },
        main: {
            description: 'Main entry file (index.js)',
            required: false
        },
        test: {
            description: 'Test command',
            required: false
        }
    }
};