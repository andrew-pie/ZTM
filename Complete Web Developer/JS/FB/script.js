var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
	{
		username: "sally",
		password: "123"
	},
	{
		username: "ingrid",
		password: "777"
	},
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired from all this"
	},
	{
		username: "Sally",
		timeline: "JS is soooo coool!"
	}
];

function isUserValid(user, pass) {
	for (var i = 0; i < database.length; i++) {
		if (database[i].username === user &&
			database[i].password === pass) {
			console.log(newsFeed);
			return true;
		}
	}
	return false;
}

function signIn(user, pass) {
	if (isUserValid(user, pass)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username or password");
	}
}

var userNamePrompt = prompt("What`s your username?");
var passwordPrompt = prompt("What`s your password?");

signIn(userNamePrompt, passwordPrompt);