const result = array.some(callback(element, index, array));

//Checking if at least one element in an array meets a condition.

// Example 1: Checking if any number in the array is greater than 10
const numbers = [5, 8, 12, 7, 3];
const isAnyNumberGreaterThan10 = numbers.some(num => num > 10);
console.log(isAnyNumberGreaterThan10); // Output: true

// Example 2: Checking if any word in the array starts with "a"
const words = ["apple", "banana", "grape", "kiwi", "orange"];
const startsWithA = words.some(word => word.startsWith("a"));
console.log(startsWithA); // Output: true

