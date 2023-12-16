//ternary operator
condition ? expr1 : expr2;

function isUserValid(bool) {
	return bool;
}

// ? === if true then do smth, : === if false do smth
var answer = isUserValid(true) ? "You may enter" : "Access Denied";

var automatedAnswer =
	"Yout account # is " + (isUserValid(true) ? 1234 : "not available");

function condition() {
	if (isUserValid(true)) {
		return "You may enter";
	} else {
		return "Access denied";
	}
}

var answer2 = condition();

//switch
function moveCommand(direction) {
	var whatHappens;
	switch (direction) {
		case "forward":
			whatHappens = "you encounter a monster";
			break;
		case "back":
			whatHappens = "you arrived home";
			break;
		case "right":
			whatHappens = "you found a river";
			break;
		case "left":
			whatHappens = "you run into a troll";
			break;
		default:
			whatHappens = "pleace enter a valid direction";
	}
}