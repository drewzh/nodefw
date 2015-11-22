var indexController = new (require('./controllers/index.controller.js')),
    aboutController = new (require('./controllers/about.controller.js')),
    Route = require('../../src/libs/router/route.js');

var routes = [
    new Route('GET', /^\/index$/, indexController.index),
    new Route('GET', /^\/about$/, aboutController.index)
];

module.exports = routes;
