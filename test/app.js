'use strict';

var assert = require('assert'),
    Application = require('../dist/app.js');

describe('Application', function() {
    describe('Module Application', function() {
        it('should have a start method', function() {
            var app = new Application({});
            assert.equal(typeof app, 'object');
            assert.equal(typeof app.start, 'function');
        });
    });

});
