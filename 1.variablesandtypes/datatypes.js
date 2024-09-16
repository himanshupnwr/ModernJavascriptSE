// String
const firstName = 'Sara';

// Number
const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 9007199254740991n;

// Reference Types

const numbers = [1, 2, 3, 4];

const person = {
  name: 'Brad',
};

function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output); //console.log('Hello'); function

//type conversions
let amount = '100';
amount = parseInt(amount); //parse to int
amount = '200';
amount = Number(amount); //parse to number
amount = amount.toString(); //change to string
// Convert string to decimal
amount = '99.5';
amount = parseFloat(amount);
// Convert number to boolean

//NaN is a type of number but its meaning is not a number of you use typeof then you get number
//NaN is a property of the global window object and its a non writable property
//we get NaN when a number can't be parsed
amount = Boolean(amount); //true
// Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);
