'use strict';
// constructor functions - call it with the new operator - arrow function won't work

// produce obj for a person
const Person = function(firstName, birthYear) {
  // instance properties - available on all instances
  this.firstName = firstName;
  this.birthYear = birthYear;

  // NEVER create a method inside a constructor function - each obj would carry around a thousand copies of the methods
  // this.calcAge = function() {
  //   console.log(2037 - this.birthYear);
  // }
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// Four steps
// 1. new empty obj is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {} - not empty - this is the trick

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);

// jonas is an instance of Person

console.log(jonas instanceof Person);

// function constructors are not a feature of JS - they are patterns developers made

// Prototypes - prototype = property of the constructor function
// all objects will inherit to all of the methods defined on this prototype property

// Person.prototype is the prototype property of the person constructor function which includes all objects to the constructor

Person.prototype.calAge = function() {
  return (2037 - this.birthYear);
}; // one copy of the method which can be used for every instance in the constructor function

Person.prototype.species = 'Homo Sapiens';
// we can also set properties on the prototype (not just methods) - it has access to it but it's not actually inside the obj

// AND the new prop is not part of the origional obj - we can check it

console.log(jonas.hasOwnProperty('firstName'));


// notice how the methods aren't contained inside each person. They have prototype inheritance