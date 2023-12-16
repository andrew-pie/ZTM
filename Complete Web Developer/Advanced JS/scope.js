// scope

// Root Scope (window)
var fun = 5;

function funFunction() {
	//child scope
	var fun = "hellloooo";
	console.log(1, fun);
}

function funerFunction() {
	//child scope
	var fun = "Byee";
	console.log(2, fun);
}

function funnestFunction() {
	//child scope
	//modified fun
	fun = "AAAAHHHH";
	console.log(3, fun);
}

console.log("window", fun);
funFunction();
funerFunction();
funnestFunction();
// output: AAAAHHHH