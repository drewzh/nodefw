'use strict';

var http = require('http');

class Response {

    constructor(reponseObj){
        if(!reponseObj instanceof http.ClientRequest){
            throw Error('reponseObj is not an instance of http.ClientRequest');
        }

        this.reponseObj = reponseObj;
    }

    send(statusCode, body){
        this.reponseObj.writeHead(statusCode, {'Content-Type': 'text/plain'});
        this.reponseObj.end(body);
    }
}

module.exports = Response;
