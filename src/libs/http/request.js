'use strict';

var http = require('http'),
    url = require('url');

class Request {
    
    constructor(requestObj){
        if(!requestObj instanceof http.ClientRequest){
            throw new Error('requestObj is not an instance of http.ClientRequest');
        }

        this._requestObj = requestObj;
    }

    getPath(){
        return url.parse(this._requestObj.url).pathname;
    }

    getClientIP(){
        return this._requestObj.connection.remoteAddress;
    }

    getHeaders(){
        return this._requestObj.headers;
    }

    getHeader(key){
        return this._requestObj.headers[key];
    }
}

module.exports = Request;
