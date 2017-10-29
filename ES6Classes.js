'use strict'
// Adding the 'use strict' at the top of the file or function, means that the javascript engine would be peculiar about the things
// that let or doesn't let to do. It helps you not make silly mistakes and its something  should do in the production code.
//Sometimes with new features the engine will choose only allow those new features to be used if we have opted in to using the strict in
// javascript i.e to be peculiar about certian things can you do.
//In the current verion of node, if we need to use class, we should use strict;

class Person{ // The class keyword is just a syntactic sugar in JavaScript, it doesn't change anything under the hood.

    constructor(firstName, lastName){ // This is the Functional Constructor that we use
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet(){ // Any  methods inside the class are automatically put on the prototype. In empty object that's created and
        // placed on it down the prototype chain, then you can add methods to the prototype simply by them existing here within the class.
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }
}


var vasu = new Person('Srinivas','Akarapu');
vasu.greet();
var Kanth = new Person('Srikanth','Akarapu');
var Nath = new Person('Srinath','Akarapu');
Kanth.greet();
Nath.greet();