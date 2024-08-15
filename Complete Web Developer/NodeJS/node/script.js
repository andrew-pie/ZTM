// const c = require("./script2");
// import { largeNumber } from "./script2.js";


let a;
if (1 === 1) {
	const { largeNumber } = await import("./script2.js")
	a = largeNumber
}
const b = 5;

console.log(a + b);

// Modules
// const d = require("fs").readFile;
// const d = require("http");
// const d = require("http");
