var firstName = "Andrew";
var lastName = "Pie";
var fullName = firstName + " " + lastName;

var a = 34;
var b = 21;
a = 2;
alert(a + b);

var name = "Susy";
if (name === "Billy") {
	alert("hi Billy!");
} else if (name === "Susy") {
	alert("hi Susy");
} else {
	alert("I dont know you");;
}

// || === or / && === and / ! === not 
if (name === "Billy" || name === "Ann") {
	alert("Hi Billy or Ann");
}

var year = prompt("How old are you?");
if (Number(year) < 18) {
	alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(year) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
} else {
	alert("Powering On. Enjoy the ride!");
}

