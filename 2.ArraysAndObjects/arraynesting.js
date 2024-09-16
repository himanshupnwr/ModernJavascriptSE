let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

fruits.push(berries);

x = fruits[3][1]; //blueberry

const allFruits = [fruits, berries];

x = allFruits[1][2]; //raspberry

// concat() - Concatenate arrays
x = fruits.concat(berries); //['apple', 'pear', 'orange', 'strawberry', 'blueberry', 'raspberry'];

// spread operator (...) - Concatenate with
x = [...fruits, ...berries];

//Flatten arrays
// flat() - Flatten an array
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat(); //[1, 2, 3, 4, 5, 6, 7, 8];

// isArray() - Check is is an array
x = Array.isArray(fruits); //true

// from() - Create an array from an array like value
x = Array.from('12345'); //[1,2,3,4,5]

// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c); //[1,2,3]

console.log(x);

// Challenge 1

const challenge = [1, 2, 3, 4, 5];

// arr.reverse();
// arr.push(0);
// arr.unshift(6);

// Same result as above
challenge.push(6);
challenge.unshift(0);
challenge.reverse();

console.log(challenge);

// Challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Solution 1
const arr3 = arr1.slice(0, 4).concat(arr2);

// Solution 2
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);

console.log(arr4);
