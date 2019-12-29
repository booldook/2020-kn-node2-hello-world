const http = require('http');
const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	res.setHeader('Content-type', 'text/plain');
	res.end('<h1>Hello World</h1>');
});

server.listen(port, host, () => {
	console.log(`http://${host}:${port}`);
})