// Ways to declare a variable
// `var`, `let`, & `const` - let and const in es5 due to scope

let firstName = 'John';
const lastName = 'Doe';
let age = 30; //30

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// We can re-assign `const` variables. If you change `age` to use `const`, you will get an error
age = 31;
console.log(age); //31

let score;
score = 1;
console.log(score); //1

if (true) {
  score = score + 1;
}

console.log(score); //2

const x = 100;
// We can not re-assign a const variable
// x = 200 // Will result in an error

// We can still manipulate arrays and objects using const
const arr = [1, 2, 3, 4];

//arr = [1,2,3,4,5] will fail
arr.push(5); //this will work
console.log(arr); //[1,2,3,4,5]

const person = {
    name: 'Brad',
  };
person.name = 'John';
person.email = 'brad@gmail.com';
console.log(person);
