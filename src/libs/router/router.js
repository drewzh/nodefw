'use strict';

class Router {

    constructor(){
        this.routes = [];
    }

    addRoute(route){
        this.routes.push(route);
    }

    // Iterate through routes and return first one that matches
    matchRoute(uri){
        var promise = new Promise((resolve, reject) => {
            for(let i=0; i<this.routes.length; i++){
                if(this.routes[i].isMatch(uri)){
                    resolve(this.routes[i]);
                }
            }

            reject(new Error('No route matched'));
        });

        return promise;
    }

}

module.exports = Router;
