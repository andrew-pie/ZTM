// Memory Heap
const a = 1;
const b = 10;
const c = 100;

// call stack
console.log('1');
setTimeout(() => {
	console.log('2')
}, 2000);
console.log('3');

const one = () => {
	const two = () => {
		console.log('4');
	}
	two();
}

// Recursion
function foo() {
	foo();
}
foo();

