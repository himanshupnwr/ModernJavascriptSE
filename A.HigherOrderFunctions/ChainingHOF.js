//Function composition involves chaining multiple higher order
//functions together to create more complex operations or transformations.

const numbers = [1, 2, 3, 4, 5];

// Chaining map() and filter() to get even numbers squared
const result = numbers
  .filter(num => num % 2 === 0) // Filter even numbers
  .map(num => num * num); // Square each number
console.log(result); // Output: [4, 16]

// Custom HOF for filtering based on multiple conditions
function customFilter(array, conditionFn) {
    return array.filter(conditionFn);
  }

  // Usage
  const numbers1 = [1, 2, 3, 4, 5];
  const evenGreaterThanTwo = customFilter(numbers1, num => num % 2 === 0 && num > 2);
  console.log(evenGreaterThanTwo); // Output: [4]
