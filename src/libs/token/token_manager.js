'use strict';

var crypto = require('crypto'),
    Token = require('./token');

/**
 * Manages creating and validating tokens for use with things like
 * generating an email with a single time use password reset link
 * that is tied directly to the users details
 */
class TokenManager {

    /**
     * Creates a new token object with random id bound to specified attributes
     *
     * @example
     * var token = tokenManager.createToken({'email': 'test@company.com'});
     */
    createToken(bindAttributes){
        // Generate new random string
        var id = this.createRandomHexString(20);
        // Create new token object
        var token = new Token(id, bindAttributes);

        return token;
    }

    /**
     * Validates a tokens
     */
    validateToken(token1, token2){
        if(!(token1 instanceof Token) || !(token2 instanceof Token)){
            throw new TypeError('validateToken only accepts objects of type Token');
        }

        // First, test if hashes match
        if(token1.id !== token2.id){
            return false;
        }

        // Second, test if all atrributes are equal
        for(let key in token1.bindAttributes){
            if(!(key in token2.bindAttributes)
                || token1.bindAttributes[key] !== token2.bindAttributes[key]){
                return false;
            }
        }

        // If all tests passed, return TRUE
        return true;
    }

    /**
     * Creates a random hex string
     *
     * @see http://stackoverflow.com/a/14869745
     */
    createRandomHexString(chars=20){
        return crypto.randomBytes(chars).toString('hex');
    }

}

module.exports = TokenManager;
