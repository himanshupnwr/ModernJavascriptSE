const newArray = array.filter(callback(element, index, array));

//Creating new arrays based on specific conditions.


// Example 1: Filtering even numbers from an array
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Example 2: Filtering words longer than 5 characters
const words = ["apple", "banana", "grape", "kiwi", "orange"];
const longWords = words.filter(word => word.length > 5);
console.log(longWords); // Output: ["banana", "orange"]
