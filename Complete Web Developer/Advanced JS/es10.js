const array = [1, [2, 3], [4, 5]];
array.flat(); // [1, 2, 3, 4, 5]

const entries = ['bob', 'sally',,,,,,,'cindy'];
entries.flat() // ['bob', 'sally', 'cindy']

.flatMap

const userEmail = '        eddytheagle@gmail.com';
const userEmail2 = 'jonnydangerous@gmail.com     ';
userEmail.trimStart(); // eddytheagle@gmail.com
userEmail2.trimEnd(); // jonnydangerous@gmail.com

userProfiles = [['commanderTom', 23], ['derekZilander', 40] ['hansel', 18]];
const obj = Object.fromEntries(userProfiles) // object 
Object.entries(obj) // array

try {
4 + 5
} catch {
 console.log ('you messed up')
}
//9

try {
	true + 'hi'
	} catch {
	 console.log ('you messed up')
	}
	// "truehi"