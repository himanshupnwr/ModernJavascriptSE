// If Statement Syntax
if (true) {
    console.log('This is true');
  }

  if (false) {
    console.log('This is NOT true');
  }

  // Evaluation expressions
  const x = 10;
  const y = 5;

  if (x >= y) {
    console.log(`${x} is greater than or equal to ${y}`);
  }

  if (x === y) {
    console.log(`${x} is equal to ${y}`);
  } else {
    console.log(`${x} is NOT equal to ${y}`);
  }

  // Block scope
  if (x !== y) {
    const z = 20;
    console.log(`${z} is 20`);
  }

  console.log(z); // Throw error

  // Shorthand If/Else
  if (x >= y)
    console.log(`${x} is greater than or equal to ${y}`),
      console.log('This is true');
  else console.log('This is false');


const d = new Date(10, 30, 2022, 6, 0, 0);
const hour = d.getHours();

if (hour < 12) {
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
}

// Nested If
if (hour < 12) {
  console.log('Good Morning');

  if (hour === 6) {
    console.log('Wake Up!');
  }
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');

  if (hour >= 20) {
    console.log('zzzzzzzz');
  }
}

if (hour >= 7 && hour < 15) {
  console.log('It is work time!');
}

if (hour === 6 || hour === 20) {
  console.log('Brush your teeth!');
}
