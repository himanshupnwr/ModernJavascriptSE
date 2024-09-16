let x;

// Coerced to a string
x = 5 + '5'; //55

x = 5 + Number('5'); //10

// Coerced to a number
x = 5 * '5'; //25

// null is coerced to 0 as it is a `falsy` value
x = 5 + null; //5

x = Number(null); //0

x = Number(true); //1
x = Number(false); //0

// true is coerced to a 1
x = 5 + true; //6

// false is coerced to 0 (falsy)
x = 5 + false; //5

// Undefined is coerced to 0 (falsy)
x = 5 + undefined; //5

console.log(x, typeof x);
