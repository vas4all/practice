var person = {
    firstname : '',
    lastname : '',
    greet : function() {
        return `Hello ${this.firstname}, ${this.lastname}`;
    }
}

var Srinivas = Object.create(person);
// Now i have a empty object Srinivas whose prototype is person object. i.e Object Srinivas will have access to all the properties of Person object.
Srinivas.firstname = 'Srinivas'; // here we are overwriting the property, to access the Person's property use __proto__
Srinivas.lastname = 'Akarapu';

var Srikanth = Object.create(person);
// Now i have a empty object Srikanth whose prototype is person object. i.e Object Srikanth will have access to all the properties of Person object.
Srikanth.firstname = 'Srikanth';
Srikanth.lastname = 'Akarapu';

console.log(Srinivas.greet())
console.log(Srikanth.greet())
console.log(Srinivas.__proto__.firstname);
console.log(Srinivas.firstname);
