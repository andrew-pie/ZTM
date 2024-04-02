const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
	return fetch(url).then(resp => resp.json())
})).then(results => {
	throw Error;
	console.log(results[0])
	console.log(results[1])
	console.log(results[2])
}).catch(() => console.log('error'))
	.finally(() => console.log('extra'));


//for await of
const urls2 = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function () {
	try {
		const [users, posts, albums] = await Promise.all(urls2.map(url =>
			fetch(url).then(resp => resp.json())
		))
		console.log('users', users)
		console.log('posts', posts)
		console.log('albums', albums)
	} catch (err) {
		console.log('oops', err)
	}
}

const getData2 = async function() {
	const arrayOfPromises = urls2.map(url => fetch(url));
	for await (let request of arrayOfPromises) {
		const data = await request.json();
		console.log(data);
	}
}