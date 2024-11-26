array.forEach(callback(currentValue, index, array));

//Iterating over arrays and performing side effects (e.g., logging).

// Example 1: Logging each element of an array
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));

// Example 2: Capitalizing and logging each word of an array
const words = ["hello", "world", "javascript"];
words.forEach(word => console.log(word.toUpperCase()));
