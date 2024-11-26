const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(4));
const name = "Ankush";
console.log(name.includes('ank')); // false, because first letter is in small caps
console.log(name.includes('Ank')); // true, as expected

const user = {a: 10, b: 20};
console.log(user.includes('a')); // blows up, as objects don't have a "includes" method

const persons = [{name: 'Phil'}, {name: 'Jane'}];
persons.includes({name: 'Phil'});
