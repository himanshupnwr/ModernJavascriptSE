console.log(10 < 20 && 30 > 15 && 40 > 30); // Must all be true
console.log(10 > 20 || 30 < 15); // Only one has to be true

// && - Will return first falsy value or the last value
let a;

a = 10 && 20; //true
a = 10 && 20 && 30; //false
a = 10 && 0 && 30; //0
a = 10 && '' && 0 && 30; //''

console.log(a);

const posts = ['Post One', 'Post Two'];
posts.length > 0 && console.log(posts[0]);

// || - Will return the first truthy value or the last value

let b;

b = 10 || 20; //10
b = 0 || 20; //20
b = 0 || null || '' || undefined; //undefined

console.log(b);

// ?? - Returns the right side operand when the left is null or undefined

let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;

console.log(c);

// ||= assigns the right side value only if the left is a falsy value.

let al = null;

// if (!a) {
//   a = 10;
// }

// a = a || 10;

al ||= 10;

console.log(al);

// &&= assigns the right side value only if the left is a truthy value.

let bl = 10;

if (bl) {
  bl = 20;
}

bl = bl && 20;

bl &&= 20;

console.log(bl);

// ??= assigns the right side value only if the left is null or undefined.

let cl = null;

if (c === null || cl === undefined) {
  cl = 20;
}

cl = cl ?? 20;

cl ??= 20;

console.log(c);
