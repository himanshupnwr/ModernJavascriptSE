const result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);

//Accumulating a single value from an array.

// Example 1: Finding the sum of numbers in an array
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

// Example 2: Finding the average of numbers in an array
const numbers1 = [10, 20, 30, 40, 50];
const average = numbers1.reduce((acc, num, index, array) => {
  acc += num;
  if (index === array.length - 1) {
    return acc / array.length;
  } else {
    return acc;
  }
}, 0);
console.log(average); // Output: 30
