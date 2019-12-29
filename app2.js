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
});

app.get("/api/user", (req, res) => {
	let users = {
		user: [
			{id: 1, name: "홍길동", age: 25},
			{id: 2, name: "홍길만", age: 32},
			{id: 3, name: "홍길룡", age: 28},
		],
		cnt: 3
	};
	res.json(users);
});

