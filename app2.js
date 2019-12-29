const express = require('express');
const app = express();
const host = '127.0.0.1';
const port = 3000;
const bodyParser = require("body-parser"); // Middleware

// 지정한 public 폴더를 client가 접근 가능한 정적 폴더로 만든다.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/", express.static("./public"));


app.listen(port, () => {
	console.log(`http://${host}:${port}`);
});

/* app.get("/", (req, res) => {
	res.send("<h1>Hello World~</h1>");
}); */

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
			{id: 3, name: "홍길룡", age: 28}
		],
		cnt: 3,
	};
	res.json(users);
});

app.get("/blog/:category/:id", (req, res) => {
	let category = req.params.category;
	let id = req.params.id;
	res.send(`category: ${category}, id: ${id}`);
});

app.get("/home2", (req, res) => {
	//res.sendFile("/index.html");
});

app.post("/join", (req, res) => {
	let userid = req.body.userid;
	let userpw = req.body.userpw;
	res.send(`userid: ${userid} / userpw: ${userpw}`);
})

