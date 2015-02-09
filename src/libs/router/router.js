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
        for(let i=0; i<this.routes.length; i++){
            if(this.routes[i].isMatch(uri)){
                return this.routes[i];
            }
        }

        throw new Error('No route matched');
    }

}

module.exports = Router;
