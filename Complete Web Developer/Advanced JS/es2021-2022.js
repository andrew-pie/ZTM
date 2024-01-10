const str = "ztm is the best of the best";
const b = str.replaceAll('best', 'worst');

const arr = [100, 200, 400, 50000, 10];
// old
arr[arr.length - 2]; // 50000
//new
arr.at(-2); // 50000
arr.at(-1); // 10
arr.at(0); //100