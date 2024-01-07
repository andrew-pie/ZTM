typeof 4 // number
typeof true // boolean
typeof 1214143235123134132142343123143242131413123123 // number
typeof 1n // bigint

let will_pokemon = {
	pikachu: {
		species: 'Mouse Pokemon',
		height: 0.4,
		weight: 6
	}
}

let andrei_pokemon = {
	pikachu: {
		species: 'Mouse Pokemon',
		height: 0.8,
		weight: 30,
		power: ''
	}
}

let weight = will_pokemon.pikachu.weight
console.log(weight) // 6

let weight2 = andrei_pokemon.pikachu.weight
console.log(weight) // error

// without errors old way
if (andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
	let weight2 = andrei_pokemon.pikachu.weight;
} else {
	let weight2 = undefined;
	console.log(weight2) //undefined
}

// New way
// Optional Chaining Operator ?
let weight3 = andrei_pokemon?.pikachu?.weight
console.log(weight3) //undefined

//Nullish Coalescing Operator ?? (undefined or 0)
let power = andrei_pokemon?.pikachu?.power ?? 'no power' // no power