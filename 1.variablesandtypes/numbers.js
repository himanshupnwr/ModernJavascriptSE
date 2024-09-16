let x;

const num = new Number(5);

// toString() - returns a string representation of the number
x = num.toString();
// To get the length
x = num.toString().length;

// toFixed() - returns a string representation of the number with a specified number of decimals
x = num.toFixed(2);

// toPrecision() - returns a number with the specified length
x = num.toPrecision(3);

// toExponential() -  convert a number to exponential notation and return its value as a string
x = num.toExponential(2);

// toLocaleString() - returns a string representation of the number, using the current locale
x = num.toLocaleString('en-US');

// valueOf - Get value
x = num.valueOf();

// The Number object itself has some properties and methods

// Largest and smallest possible number
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);

//Math Object

console.log(Math);

let mathNum;

// Square root
mathNum = Math.sqrt(9); //3

// Absolute value
mathNum = Math.abs(-5); //5

// Round
mathNum = Math.round(4.2); //4

// Round up
mathNum = Math.ceil(4.2); //5

// Round down
mathNum = Math.floor(4.9); //4

// Exponent
mathNum = Math.pow(2, 3); //8

// Minimum number
mathNum = Math.min(4, 5, 3); //3

// Maximum number
mathNum = Math.max(4, 5, 3); //5

// Get a random number/decimal between 0 and 1
mathNum = Math.random();

// Get a random number between 1 and 100
mathNum = Math.floor(Math.random() * 100 + 1);

console.log(x);


//Challenge
x = Math.floor(Math.random() * 100) + 1;
y = Math.floor(Math.random() * 50) + 1;

// Get the sum
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

// Get the difference
const difference = x - y;
const differenceOutput = `${x} - ${y} = ${difference}`;
console.log(differenceOutput);

// Get the product
const product = x * y;
const productOutput = `${x} * ${y} = ${product}`;
console.log(productOutput);

// Get the quotient
const quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient}`;
console.log(quotientOutput);

// Get the remainder
const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`;
console.log(rmOutput);
