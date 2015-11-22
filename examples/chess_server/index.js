var Application = require('../../src/app.js'),
    routes = require('./routes.js');

var chess = new Application({
    name: 'Chess Server',
    version: 'v0.1',
    author: 'Andrew Higginson',
    debug: true
});

// Add routes
chess.addRoutes(routes);

// Start the application
chess.start();
