var Obj = {
    firstname : 'Sri',
    greet : function(){
        console.log(`Hello ${this.firstname}`);
    }
}

Obj.greet();
Obj.greet.call({firstname:'vasu'});
Obj.greet.apply({firstname:'vasu'});

// THe only difference between .call and .apply is , in the way we pass the parameters.
// i.e , if the greet function accepts params, we need to follow the below way
// Obj.greet.call({firstname:'vasu'}, param1, param2, param3); The params should be comma separated.
// Obj.greet.call({firstname:'vasu'}, [param1, param2, param3]); The params should be in a array.