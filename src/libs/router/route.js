'use strict';

/**
 * Container object for route metadata
 */
class Route {

    constructor(pattern, callback){
        this.pattern = pattern;
        this.callback = callback;
    }

    isMatch(uri){
        return uri.match(this.pattern) !== null;
    }
}

module.exports = Route;
