// Setting object properties with the same name as a variable
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName, //id key and value and same then no need to define them separately firstName : firstName
  lastName,
  age,
};

console.log(person.age);

// Destructuring object properties

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

const {
  id: todoId, // rename id to todoId
  title,
  user: { name }, // destructuring multiple levels
} = todo;

console.log(todoId);

// Destructuring arrays & using the rest/spread operator
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers; //using ...rest as params in c#

console.log(first, second, rest);

//Challenge
// Step 1
const library = [
    {
      title: 'The Road Ahead',
      author: 'Bill Gates',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'Mockingjay',
      author: 'Suzanne Collins',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
  ];

  // Step 2
  library[0].status.read = true;
  library[1].status.read = true;
  library[2].status.read = true;

  // Step 3
  // destructure title from library[0] and rename it to firstbook
  const { title: firstBook } = library[0];

  console.log(firstBook);

  // Step 4
  const libraryJSON = JSON.stringify(library);

  console.log(libraryJSON);
