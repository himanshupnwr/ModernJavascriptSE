const newArray = array.map(callback(currentValue, index, array));

//Iterating over arrays and transforming elements.

// Example 1: Doubling each number in an array
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Example 2: Converting an array of strings to uppercase
const words = ["hello", "world", "javascript"];
const uppercaseWords = words.map(word => word.toUpperCase());
console.log(uppercaseWords); // Output: ["HELLO", "WORLD", "JAVASCRIPT"]

