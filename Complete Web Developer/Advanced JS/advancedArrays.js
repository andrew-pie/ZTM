const array = [1, 2, 10, 16];

const double = [];

const newArray = array.forEach((num) => {
	double.push(num * 2);
})

console.log(double); // [2, 4, 20, 32]

// map, filter, reduce

// long
// const mapArray = array.map((num) => {
// 	return num * 2;
// });

// short (if we have one value only)
const mapArray = array.map(num => num * 2);

console.log(mapArray); // [2, 4, 20, 32]

// filter
const filterArray = array.filter(num => num > 5);

console.log(filterArray) // [10, 16]

// reduce

const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 0)

console.log(reduceArray); // [29]