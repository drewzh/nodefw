'use strict';

var fs = require('fs');

/**
 * Adaptor for writing logs directly to a file
 */
class FileLogger {

    constructor(filePath){
        if(typeof(filePath) === 'undefined'){
            throw new Error('No path specified for FileAdaptor');
        }

        this.filePath = filePath;
    }

    output(message){
        // Add new line at end of message
        message = message + '\r\n';

        fs.appendFile(this.filePath, message, (err) => {
          if (err) {
              throw err;
          }
        });
    }

}

module.exports = FileLogger;
