'use strict';

class AboutController {
    index(req, res){
        return res.send(200, 'This is the about page');
    }
}

module.exports = AboutController;
