const first = () => {
	const greet = "Hi";
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

//Closures - a function ran, the function excuted. It`s never going to excute again
// BUT it`s going remember that are references to those variables
// so the child scope always has access to parent scope.

//Curring
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4); //12
const multiplyBy5 = curriedMultiply(5); 

//Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5); //7

// Avoiding Side Effects and functional purity.

//side effect
var a = 1;
function b() {
	a = 2;
}