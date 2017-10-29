'use strict';

var EventEmitter = require('events');

class Greetr extends EventEmitter {

    constructor(){
        super();
        this.greeting = 'Hello';
    }

    greet(data){
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data);
    }
}

module.exports = Greetr;