'use strict';

class Logger {

    constructor(adaptors){
        if(typeof(adaptors) === 'undefined'){
            throw new Error('No logging adaptors specified');
        }

        this.adaptors = [];

        if(adaptors.constructor === Array){
            this.adaptors = adaptors;
        }else{
            this.adaptors.push(adaptors);
        }
    }

    log(message){
        // Add timestamp to output
        var timestamp = new Date().toUTCString();
        message = `[${timestamp}] ${message}`;

        // Output message to all adaptors
        this.adaptors.forEach(function(adaptor){
            adaptor.output(message);
        });
    }

    /**
     * Helper methods
     */
    info(message){
        this.log(`INFO: ${message}`);
    }

    debug(message){
        this.log(`DEBUG: ${message}`);
    }

    warn(message){
        this.log(`WARNING: ${message}`);
    }

    error(message){
        this.log(`ERROR: ${message}`);
    }

    crit(message){
        this.log(`CRITICAL: ${message}`);
    }
}

module.exports = Logger;
