function sayHello() {
	console.log("Hello");
}

sayHello();

// Anonymus function
var sayBye = function () {
	console.log("Bye");
}

sayBye();

function sing(song) {
	console.log(song);
}

sing("Laaaaaaaaaa");
sing("Beeeeeee");

function multiply(a, b) {
	if (a > 10 || b > 10) {
		return "that`s too hard";
	} else {
		return a * b;
	}
}

console.log(multiply(5, 10));

// exercise 5
//function declaration
function checkDriverAge(age) {
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

// // function exoression
// const checkDriverAge2 = function(age) {
// 	if (Number(age) < 18) {
// 		return alert("Sorry, you are too yound to drive this car. Powering off");
// 	} else if (Number(age) > 18) {
// 		return alert("Powering On. Enjoy the ride!");
// 	} else if (Number(age) === 18) {
// 		return alert("Congratulations on your first year of driving. Enjoy the ride!");
// 	}
// }

// var age = prompt("What is your age?");
checkDriverAge(age = prompt("What is your age?"));