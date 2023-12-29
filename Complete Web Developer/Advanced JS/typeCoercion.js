1 === '1' // falcse
1 == '1' // true

if (1) {
	console.log(5) //undefined
}

if (0) {
	console.log(5) //undefined
}

-0 === +0 // true

Object.is(-0,+0) // false