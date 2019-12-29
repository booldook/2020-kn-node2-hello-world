const express = require('express');
const app = express();
const host = '127.0.0.1';
const port = 3000;
app.listen(port, () => {
	console.log(`http://${host}:${port}`);
});

app.get("/", (req, res) => {
	res.send("<h1>Hello World</h1>");
});

app.get("/hello", (req, res) => {
	res.send("<h1>Hello World2~</h1>");
});

app.get("/home", (req, res) => {
	let name = req.query.name;
	res.send(`<h1>${name}님 반갑습니다.</h1>`);
})