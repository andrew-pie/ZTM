import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
	if (err) {
		console.log('errrroooorrr');
	}
	console.log('1', data.toString());
})

const file = fs.readFileSync('./hello.txt');
console.log('2', file.toString());