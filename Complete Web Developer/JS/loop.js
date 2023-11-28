var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study JS",
	"eat healthy"
];

var todosImportant = [
	"clean room!",
	"brush teeth!",
	"exercise!",
	"study JS!",
	"eat healthy!"
];

for (var i = 0; i < todos.length; i++) {
	console.log(todos[i], i);
}

//forEach - new
todos.forEach(function (todo, i) {
	console.log(todo, i);
})


function logTodos(todo, i) {
	console.log(todo, i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);


var counterOne = 0;
//first check, than do if okay
while (counterOne < 10) {
	console.log(counterOne);
	counterOne++
}

// first do, than check
var counterTwo = 10;
do {
	console.log(counterTwo);
	counterTwo--;
} while (counterTwo > 0);