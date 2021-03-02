// 모듈 요청구간. //
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

// http 형식으로 express서버를 작성. //
var Server = http.createServer(app);

//  라우터 생성 구간 //
// 회원가입 페이지 이동 라우터 생성
var signupPage_Router = require('../routers/signup_page');

// 회원가입 라우터 생성
var signupRouter = require('../routers/signup');

// 로그인 라우터 생성
var loginRouter = require('../routers/login');

// 서버를 3030포트로 실행. //
Server.listen(3030);

// 홈페이지에 요청이오면, 접속자 주소를 출력하고, Login.html 전송.
app.get('/', (req, res) => {
  console.log("클라이언트 접속자 주소: " + req.ip);
  res.sendFile(path.join(__dirname, '../html/login.html'));
  
});

// 데이터 파싱 구간. 이 미들웨어들을 작성하지 않으면, html로 부터 데이터 값을 가져올 수 없었다.
app.use(express.json()); 
app.use(express.urlencoded({ extended : true}));

// 회원가입 페이지 이동.
app.use('/signup.html', signupPage_Router);

// 회원가입 데이터 전송.
app.use('/signup', signupRouter);

// Login 시도.
app.use('/login', loginRouter)


