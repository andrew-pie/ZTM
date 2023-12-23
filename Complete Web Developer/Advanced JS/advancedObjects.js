// reference type
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

object1 === object2 // true
object1 === object3 // false

object1.value = 15
object2.value // 15
object3.value // 10


// context vs scope
function b() {
let a = 4;
}
console.log(a) // error
console.log(this) // Window object
console.log(this === window) // true 

function a() {
	console.log(this);
}
a() // Window object

const object4 = {
	a: function() {
		console.log(this);
	}
}
object4.a() // {a: f}

//instantiation (copy of objects)
class Player {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name}, I am a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type)
	}
	play() {
		console.log(`WEEEEE I am a ${this.type}`);
	}
}

const wizard1 = new Wizard(`Shelly`, `Healer`);
const wizard2 = new Wizard(`Shawn`, `Dark Magic`);