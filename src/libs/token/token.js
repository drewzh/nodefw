'use strict';

var crypto = require('crypto');

/**
 * Data container for token object
 */
class Token {

    constructor(id, bindAttributes){
        this.id = id;
        this.bindAttributes = bindAttributes;
    }

}

module.exports = Token;
