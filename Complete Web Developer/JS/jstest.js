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
	spells: ["abrakadabra", "shazam", "boo"],
	//shout is method of user
	shout: function () {
		console.log("AHHHHHH!");
	}
};

user.name;
user.favouriteFood = "spinach";
user.isMared = true;

var list = [
	{
		username: "andy",
		password: "secre"
	},
	{
		username: "jess",
		password: "123"
	}
];

list[0].password;
// secre

// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
{
	username: "andrei",
		password: "supersecret"
};

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [
	{
		username: "andrei",
		password: "supersecret"
	}
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

//function declaration
function newFunction() {

}

//function expression
var newFunction = function () {

};

//expression
1 + 3;
var a = 2;
return true;

//calling or invoking a function
alert()
newFunction(param1, param2);

//assign a variable
var a = true;

//function vs method
function thisIsAFunction() {

}

var obj = {
	thisIsAMethod: function () {

	}
}
thisIsAFunction()
obj.thisIsAMethod()