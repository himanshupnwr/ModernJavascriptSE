// Log number
console.log(100);

// Log string
console.log('Hello World');

// Log multiple values
console.log(20, 'Hello', true);

// Log a variable
const x = 100;
console.log(x);

// Console error & warning
console.error('Alert');
console.warn('Warning');

// Log object as table
console.table({ name: 'Brad', email: 'brad@gmail.com' });

// Group console commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Add CSS to logs
const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);

//shortcuts
//ctrl + right and left arrow for navigation
//alt + right and left arrow for navigation
//shift + ctrl + left and right arrow for selection
//alt + up and down arrow for moving the line up or down
//shift + alt + up or down arrow for copying the line to new line
//press shift on a word will highlight all places its there in the code file
//ctrl + d on a word to select the next instance where its there in the code
//shift + ctrl + d for selecting all the instances where the word is there in the code
//put a cursor in all different place in code where we want to add a word while press alt + click and type
//ctrl + shift + o  to open search box in vscode
//ctrl + shift + f to search in complete project
//ctrl + b to toggle sidebar
//ctrl + ~ to open the terminal
