'use strict';

var http = require('http'),
    url = require('url');

/**
 * Request object abstraction that adds extra functionality and
 * helper methods to simplify parsing request data
 */
class Request {

    constructor(requestObj){
        if(!requestObj instanceof http.ClientRequest){
            throw new Error('requestObj is not an instance of http.ClientRequest');
        }

        this._requestObj = requestObj;
    }

    /**
     * @returns {Object} URL Parts
     */
    getURLParts(){
        var parts = url.parse(this._requestObj.url);

        return parts;
    }

    /**
     * @return {String} Resource path requested
     */
    getPath(){
        return this.getURLParts().pathname;
    }

    /**
     * @return {String} Client IP address
     */
    getClientIP(){
        var connection = this._requestObj.connection;

        return connection.remoteAddress;
    }

    getHeaders(){
        return this._requestObj.headers;
    }

    getHeader(key){
        return this._requestObj.headers[key];
    }
}

module.exports = Request;
