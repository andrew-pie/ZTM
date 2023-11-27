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

var list = ["tiger", "cat", "bear", "bird"];
console.log(list[0]);
list.shift();
list.pop();
list.push("elephant");
var newList = list.concat(["bee", "deer"]);
newList.sort();

var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.shift();
array.sort();
var newArray = array.concat(["Kiwi"]);
newArray.shift();
newArray.reverse();
console.log(newArray);

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1]);

var user = {
	name: "John",
	age: 34,
	hobby: "Soccer",
	isMared: false,
};

user.name;
user.favouriteFood = "spinach";
user.isMared = true;