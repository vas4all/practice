var Greetr = require('./Greetr.js');

var Greetr1 = new Greetr();

Greetr1.on('greet', function(data){
    console.log('Someone Greeted : '+ data);
})

Greetr1.greet('Sri');