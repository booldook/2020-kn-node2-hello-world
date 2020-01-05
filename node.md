# Node.js를 사용하기 위한 셋팅
## node.js 설치
1. nodejs.org 에서 node를 다운받는다.
2. 다운로드 한 후 기본값으로 설치한다.
3. 설치 후 cmd(terminal)을 실행하여 아래의 명령을 수행해 본다.
~~~
node --version
~~~
4. 프로젝트 폴더를 생성하고, VSCode로 폴더를 연다.
5. app.js파일을 생성하고, 터미널창을(ctrl+j)로 열어서 아래의 코드를 입력한다.
~~~bash
# 한번만 설치하면 되는 global 모듈
npm i -g supervisor nodemon #node개발할때
npm i -g pm2 # 배포할때

# npm 프로젝트를 설치하고, package.json을 생성해 준다.
npm init -y

# express모듈을 설치한다.
npm i express

# pug를 설치한다.
npm i pug
~~~

6. app.js파일을 열고 아래의 코드를 입력한다.
~~~js
const express = require('express');
const app = express();
const port = 3000;
const host = '127.0.0.1';

// 서버 구동
app.listen(3000, () => {
	console.log(`http://${host}:${port}`);
});

// express 세팅 및 미들웨어 세팅
app.set('view engine', 'pug');
app.set('views', './views');

// 정적라우터 세팅
app.use('/', express.static('./public'));
// body-parser 세팅
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.locals.pretty = true; // 클라이언트에 보내주는 소스를 들여쓰기 해준다.

app.get("/user", (req, res) => {
	// http://127.0.0.1:3000/user?id=10
	let queryId = req.query.id; // get방식 주소줄을 통해 요청된 변수접근
});
app.get("/user/:id", (req, res) => {
	let paramId = req.params.id;	// semantic방식 주소줄을 통해 요청된 변수접근
});
app.post("/user", (req, res) => {
	let bodyId = req.body.id; // post방식으로 요청된 변수 접근
});
~~~