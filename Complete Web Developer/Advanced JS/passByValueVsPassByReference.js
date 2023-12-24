var a = 5;
var b = a;

b++;

console.log(a); //5
console.log(b); //6

let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1;

obj2.password = 'easypeasy';

console.log(obj1); // Yao, easypeasy
console.log(obj2); // Yao, easypeasy

var c = [1, 2, 3, 4, 5];
var d = c;
d.push(12312);

console.log(c); // [1, 2, 3, 4, 5, 12312]
console.log(d); // [1, 2, 3, 4, 5, 12312]

let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
let clone2 = {...obj};