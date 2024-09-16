let d;

// Get today's date and time
d = new Date();

// Set to a string
d = d.toString();

// Get a specific date
// Important: the month is 0-based, so 0 is January and 11 is December
d = new Date(2021, 0, 10, 12, 30, 0);

// Pass in a string
d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('2022/07/10');
d = new Date('07/10/2022');

console.log(d);
//Always better to use / instead of - when not defining the timezone

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// Get current timestamp
d = Date.now();

// Get the timestamp of a specific date
d = new Date();
d = d.getTime();
d = d.valueOf();

// Create a date from a timestamp
d = new Date(1666962049745);

// Convert from milliseconds to seconds
d = Math.floor(Date.now() / 1000);

console.log(d);


//Date Object Methods
let x;

// Date methods

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getMonth();
x = d.getMonth() + 1;

x = d.getDate();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; //2022-10-28

// Intl.DateTimeFormat API (locale specific)
x = Intl.DateTimeFormat('en-US').format(d); //10/28/22
x = Intl.DateTimeFormat('en-GB').format(d); //28/10/22
x = Intl.DateTimeFormat('default').format(d); //28/10/22

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d); //October

x = d.toLocaleString('default', { month: 'short' }); //Oct

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
}); //Friday, October 28, 2022 at 9:49:28AM

console.log(x);
