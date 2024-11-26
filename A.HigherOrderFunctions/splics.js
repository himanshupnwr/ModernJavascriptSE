const items = ['eggs', 'milk', 'cheese', 'bread', 'butter'];
items.splice(2, 1);
console.log(items); // [ 'eggs', 'milk', 'bread', 'butter' ]

//Shift
const items1 = ['eggs', 'milk', 'cheese', 'bread', 'butter'];
items.shift()
console.log(items); // [ 'milk', 'cheese', 'bread', 'butter' ]

//unshift()
const items2 = ['eggs', 'milk'];
items.unshift('bread')
console.log(items); // [ 'bread', 'eggs', 'milk' ]

//fill()
const heights = [1, 2, 4, 5, 6, 7, 1, 1];
heights.fill(0);
console.log(heights); // [0, 0, 0, 0, 0, 0, 0, 0]

const heights2 = [1, 2, 4, 5, 6, 7, 1, 1];
heights2.fill(0, 4);
console.log(heights2); // [1, 2, 4, 5, 0, 0, 0, 0]
