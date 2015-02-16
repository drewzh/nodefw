'use strict';

var http = require('http');

/**
 * Response object abstraction that adds extra functionality and
 * helper methods to simplify common response types
 */
class Response {

    /**
     * @param {Object} http.ServerResponse
     * @return {Object} this
     */
    constructor(reponseObj){
        if(!reponseObj instanceof http.ClientRequest){
            throw Error('reponseObj is not an instance of http.ClientRequest');
        }

        this._reponseObj = reponseObj;

        return this;
    }

    /**
     * Basic plain text response
     *
     * @return {void}
     */
    send(statusCode, body){
        this._reponseObj.writeHead(statusCode, {'Content-Type': 'text/plain'});
        this._reponseObj.end(body);
    }

    /**
     * Helper method for forming generic JSON response
     */
    sendJSON(statusCode, obj){
        var body;

        try {
            body = JSON.stringify(obj);
        }catch(e){
            throw new Error(`Unable to serialise reponse object to JSON: {e.message}`);
        }

        this.send(statusCode, body);
    }

    /**
     * Set or replace header based on name
     */
    setHeader(name, value){
        this._reponseObj.setHeader(name, value);

        return this;
    }

    /**
     * Returns original wrapped response object
     *
     * @return {Object} http.ServerResponse
     */
    getRequestObject(){
        return this._reponseObj;
    }
}

module.exports = Response;
