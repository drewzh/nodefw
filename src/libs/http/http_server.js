'use strict';

var http = require('http'),
    Request = require('./request.js'),
    Response = require('./response.js');

class HttpServer {

    constructor(){
        this.requestHandlers = [];
    }

    listen(port, address){
        this.port = port || '8080';
        this.address = address || '0.0.0.0';

        http.createServer(this.handleRequest.bind(this)).listen(this.port, this.address);
    }

    /**
     * Add new request handler
     */
    addHandler(handler){
        this.requestHandlers.push(handler);
    }

    /**
     * Main request handler
     */
    handleRequest(req, res){
        this.request = new Request(req);
        this.response = new Response(res);

        // Iterate through handlers, passing in the next in line as a param
        for(let i=0; i<this.requestHandlers.length; i++){
            this.requestHandlers[i](this.request,
                                    this.response,
                                    this.requestHandlers[i+1]);
        }

    }
}

module.exports = HttpServer;
