'use strict';

var assert = require('assert'),
    Logger = require('../../../src/libs/logging/logger'),
    ConsoleLogger = require('../../../src/libs/logging/adaptors/console');

describe('Logging', function() {
    describe('Module Logger', function() {
        it('should have a log method', function() {
            var logger = new Logger(new ConsoleLogger());
            assert.equal(typeof logger, 'object');
            assert.equal(typeof logger.log, 'function');
        });
    });

});
