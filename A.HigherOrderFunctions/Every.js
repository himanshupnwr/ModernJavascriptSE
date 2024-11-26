const result = array.every(callback(element, index, array));

//Checking if all elements in an array meet a condition.


// Example 1: Checking if all numbers in the array are positive
const numbers = [5, 8, 12, 7, 3];
const areAllNumbersPositive = numbers.every(num => num > 0);
console.log(areAllNumbersPositive); // Output: true

// Example 2: Checking if all words in the array have length greater than 3
const words = ["apple", "banana", "grape", "kiwi", "orange"];
const allWordsHaveLengthGreaterThan3 = words.every(word => word.length > 3);
console.log(allWordsHaveLengthGreaterThan3); // Output: true
