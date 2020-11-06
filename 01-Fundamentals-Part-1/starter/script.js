console.log('Hello World!!!');

/*

let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN!');
// console.log(40 + 8 + 23 - 10); - cmd slash

let firstName = 'Tom';
console.log(firstName);


// variable name conventions
let jonas_tom = 'JT';

let $function = 27;

let person = 'Tomas';

let PI = 3.1415;

let myFirstJob = 'Coder';

let myCurrentJob = 'Teacher';

// Bad variable names

let job1 = 'programm';

let job2 = 'teachers';

// a variable is a box where we can store a value

console.log(myFirstJob);

*/ // multi line comment

let JavaScriptIsFun = true; // the value holds the datatype and not the variable
console.log(JavaScriptIsFun); // executed from top to bottom

console.log(typeof true);
// console.log(typeof JavaScriptIsFun);
console.log(typeof 3);
console.log(typeof 'Jonas'); //need quotes either single or double - without quotes - JS reads it as a variable


JavaScriptIsFun = 'YES!'; // reassign a new value of the same variable

// Dynamic typing - like putting a book in a box and taking out the book and putting in a phone in the box
console.log(typeof JavaScriptIsFun);

// undefined means an empty value - both a value and a type of value
let year;

console.log(year);
console.log(typeof year);

year = 1991; // no let - we're not creating a new variable

console.log(year);
console.log(typeof year);

console.log(typeof null); // similar to undefined - both value and type of value - bug -not corrected for legacy reasons
// this always returns the value of 'object' - weird behavior