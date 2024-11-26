// Use map() for transforming elements in an array.
// Use filter() for selecting elements based on a condition.
// Use reduce() for aggregating values into a single result.
// Use forEach() for performing side effects without returning a new array.

// Benefits of higher order functions
// Code Reuse – Define common logic in one place
// Readability – Extract logic into descriptive functions
// Testability – Smaller focused functions are easier to test
// Flexibility – Logic can be swapped by passing different functions


function filterFunction(arr, callback) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]) ? filteredArr.push(arr[i]) : null;
  }
  return filteredArr;
}

// Function containing logic for filtering out odd numbers

function isOdd(x) {
  return x % 2 != 0;
}

// Function containing logic for filtering out even numbers

function isEven(x) {
  return x % 2 === 0;
}

function isGreaterThanFive(x) {
  return x > 5;
}


// For filtering out odd numbers

filterFunction(arr, isOdd)
// Output of console.log(filterFunction(arr, isOdd)):
// [ 1, 3, 5, 7, 9, 11 ]

// For filtering out even numbers

filterFunction(arr, isEven)
// Output of console.log(filterFunction(arr, isEven)):
// [ 2, 4, 6, 8, 10 ]


//----------------- Higher Order Function that accepts a callback function-----
function higherOrderFunction(callback) {
    // Performing some operations
    console.log("Executing the higher order function...");

    // Calling the callback function
    callback();
}

  // Callback function to be passed to the higher order function
function callbackFunction() {
    console.log("Executing the callback function...");
}

// Calling the higher order function with the callback function as argument
higherOrderFunction(callbackFunction);

//----------------- Higher Order Function that returns a function---------------
function createGreeter(greeting) {
    // Returning a new function
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
}

// Creating a greeter function with a specific greeting
const greetHello = createGreeter("Hello");
greetHello("John"); // Output: Hello, John!

  // Creating another greeter function with a different greeting
const greetGoodbye = createGreeter("Goodbye");
greetGoodbye("Alice"); // Output: Goodbye, Alice!


// -------------- Higher Order Function for performing a specified operation on each element of an array----
function performOperationOnArray(array, operation) {
    return array.map(operation);
}

  // Callback function for doubling each element of an array
function double(number) {
    return number * 2;
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = performOperationOnArray(numbers, double);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// -------------- Example: HOF for filtering elements based on a condition --------
function filterArray(array, condition) {
    return array.filter(condition);
}

const numbers1 = [1, 2, 3, 4, 5];

  // Using filterArray to filter even numbers
const evenNumbers = filterArray(numbers1, num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Example: HOF for performing a series of operations on an array
function processArray(array, operations) {
    return operations.reduce((acc, operation) => operation(acc), array);
}

const numbers2 = [1, 2, 3, 4, 5];

  // Using processArray to perform multiple operations
const result = processArray(numbers2, [
    arr => arr.map(num => num * 2),
    arr => arr.filter(num => num % 3 === 0)
]);
console.log(result); // Output: [6]

// Example: HOF for creating a multiplier function
function createMultiplier(factor) {
    return function(number) {
      return number * factor;
    };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10

// A custom higher-order function that captures and retains a condition
function notMatchingCondition(condition) {
  return function (item) {
    return !condition(item);
  };
}

// Usage
const numbers3 = [1, 2, 3, 4, 5];
const isOdd = (number) => number % 2 !== 0;
const rejectOddNumbers = numbers3.filter(notMatchingCondition(isOdd));

console.log(rejectOddNumbers); // Output: [2, 4]
