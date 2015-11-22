'use strict';

class Logger {

    constructor(adaptors, tags){
        if(typeof(adaptors) === 'undefined'){
            throw new Error('No logging adaptors specified');
        }

        this.tags = tags;
        this.adaptors = [];

        if(adaptors.constructor === Array){
            this.adaptors = adaptors;
        }else{
            this.adaptors.push(adaptors);
        }
    }

    log(message, tag){
        // Add timestamp to output
        var timestamp = new Date().toUTCString();
        message = `[${timestamp}] ${message}`;

        if(this.tags.indexOf(tag) !== -1){
            // Output message to all adaptors
            this.adaptors.forEach(adaptor => adaptor.output(message));
        }
    }

    /**
     * Helper methods
     */
    info(message){
        this.log(message, 'info');
    }

    debug(message){
        // TODO: Tag filtering
        if(this.debug){
            this.log(message, 'debug');
        }
    }

    warn(message){
        this.log(message, 'warning');
    }

    error(message){
        this.log(message, 'error');
    }

    crit(message){
        this.log(message, 'critical');
    }
}

module.exports = Logger;
