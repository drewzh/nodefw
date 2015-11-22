'use strict';

/**
 * Container object for route metadata
 *
 * TODO: Add simple syntax support but keep RegEx compatibility
 */
class Route {

    constructor(type, pattern, action){
        this.type = type;
        this.pattern = pattern;
        this.action = action;
    }

    isMatch(uri){
        return uri.match(this.pattern) !== null;
    }

    toJSON(){
        return {
            type: this.type.toUpperCase(),
            pattern: this.pattern.toString()
        }
    }
}

module.exports = Route;
