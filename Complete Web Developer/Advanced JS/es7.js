const pets = ['cat', 'dog', 'bat'];

pets.includes('dog'); // true

const square = (x) => x**2;
square(5) //25
const cube = (y) => y**3;
cube(4) //64


// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John'); // false


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.filter(name => name.includes('John')) // ['Johnathan']


// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power100 = (num) => num**100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
power100(10000) // Infinity
// Research for yourself why you get this result
