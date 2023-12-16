// let + const
const player = 'bobby';
// Const can not be updated
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
	let wizardLevel = true;
	console.log('inside', wizardLevel);
	// Output === true
}

console.log('outside', wizardLevel);
// Output === false

// Don`t use var from now

//const nice for functions
const a = function () {
	console.log("a");
}

const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}

// If const object, we can change object properties, but we can not resign variables

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

=>

const { player, experience } = obj;
let { wizardLevel } = obj;


const a = "Simon";
const b = true;
const c = {};

const obj1 = {
	a,
	b,
	c
}


//template strings
const name = "Sally";
const age = 34;
const pet = "horse"

const greeting = "Hello " + name + " you seem to be doing " + greeting + "!";
const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;


//default arguments
function greet(name='', age=30, pet='cat') {
	const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
}

greet();
greet("jonh", 50, "monkey")

//Symbol
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

sym2 === sym3 // false


//arrow functions
//usual
function add(a, b) {
	return a + b;
}

//arrow
const add = (a, b) => a + b;