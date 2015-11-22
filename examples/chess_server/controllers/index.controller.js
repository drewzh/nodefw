'use strict';

class IndexController {
    index(req, res){
        return res.send(200, 'This is the index page');
    }
}

module.exports = IndexController;
