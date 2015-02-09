'use strict';

/**
 * Adaptor for writing log output to the console
 */
class ConsoleLogger {

    constructor(options){
        if(typeof(options) !== 'undefined'){
            this.colours = options.colours || false;
        }
    }

    output(message){
        console.log(message);
    }

}

module.exports = ConsoleLogger;
