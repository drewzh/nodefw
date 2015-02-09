'use strict';

var HttpServer = require('./libs/http/http_server'),
    Router = require('./libs/router/router'),
    Route = require('./libs/router/route'),
    Logger = require('./libs/logging/logger'),
    ConsoleLogger = require('./libs/logging/adaptors/console'),
    FileLogger = require('./libs/logging/adaptors/file');

class Application {

    constructor(options){
        // TODO: Fix requirement for app variable
        var app = this;

        this.name = options.name || 'Default Application';
        this.author = options.author || '';
        this.description = options.description || '';
        this.version = options.version || '';

        /**
         * Setup logging
         */
        this.logger = new Logger([new FileLogger(__dirname + '/app.log'),
                                  new ConsoleLogger()]);

        /**
         * Setup HTTP and routing
         */
        this.router = new Router();
        this.httpServer = new HttpServer(this.router);

        // Log incoming requests
        this.httpServer.addHandler(function(req, res, next){
            var incomingAddress = req.getClientIP(),
                requestedPath = req.getPath();

            app.logger.debug(`Incoming request from: ${incomingAddress} for ${requestedPath}`);

            next(req, res);
        });

        // Add routing handler
        this.httpServer.addHandler(function(req, res, next){
            try{
                var route = app.router.matchRoute(req.getPath());
                route.callback(req, res);
            }catch(e){
                app.logger.error(`Routing error: ${e.message}`);
            }
        });
    }

    start(port, address){
        this.httpServer.listen(port, address);
        this.logger.info(`Application started, listening on port ${this.httpServer.port}`);
    }

    /**
     * Router helper methods
     */
    get(pattern, callback){
        this.router.addRoute(new Route(pattern, callback));
    }

    post(pattern, callback){
        this.router.addRoute(new Route(pattern, callback));
    }
}

module.exports = Application;
