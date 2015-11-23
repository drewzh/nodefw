'use strict';

var assert = require('assert'),
    HttpServer = require('../../../src/libs/http/http_server.js');

describe('HTTP', function() {
    describe('Module HttpServer', function() {
        it('should have a listen method', function() {
            var httpServer = new HttpServer();
            assert.equal(typeof httpServer, 'object');
            assert.equal(typeof httpServer.listen, 'function');
        });
    });

});
