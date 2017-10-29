var Emitter = require('./emitter.js');
var EventsConfig = require('./EventsConfig.js');

var emit = new Emitter();

emit.on(EventsConfig.events.SUCCESS, function(){
    console.log('Success message');
})
emit.on(EventsConfig.events.SUCCESS, function(){
    console.log('Redirect to success page')
});

emit.emit(EventsConfig.events.SUCCESS);