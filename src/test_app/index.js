'use strict';

var app = require('../app.js');

var test_app = new app({
    name: 'Test Application',
    version: 'v0.1',
    author: 'Andrew Higginson'
});

test_app.get(/\/$/, function(req, res){
    res.send(200, 'Index page');
});

test_app.get(/\/about/, function(req, res){
    res.send(200, 'About page');
});

test_app.get(/.*/, function(req, res){
    res.send(404, 'Page not found');
});

test_app.start(process.env.PORT || 8080);
