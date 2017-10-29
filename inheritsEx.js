var eventEmitter = require('events'); // NodeJS events emitter
var util = require('util');

function Greetr() {
    this.greeting = 'HelloWOrld';
}

util.inherits(Greetr, eventEmitter); // Any object created from Greetr should also have access to the method and properties on the prototype property of the Event Emitter.

Greetr.prototype.greet = function(data){
    console.log(this.greeting);
    this.emit('greet', data);
}

var greetr1 = new Greetr();

greetr1.on('greet', function(name){
    console.log(`Hello ${name}`);
})

greetr1.greet('Srinivas');