'use strict';

var fs = require('fs');

/**
 * Adaptor for writing logs directly to a file
 */
class FileLogger {

    constructor(file_name){
        if(typeof(file_name) === 'undefined'){
            throw new Error('No file name specified for FileAdaptor');
        }

        this.file_name = file_name;
    }

    output(message){
        // Add new line at end of message
        message = message + '\r\n';

        fs.appendFile(this.file_name, message, function (err) {
          if (err) {
              throw err;
          }
        });
    }

}

module.exports = FileLogger;
