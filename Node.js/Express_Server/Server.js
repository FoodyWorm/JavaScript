const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('combined'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'session-cookie',
}));
// 서버와 클라이언트 모두에게 LOG
app.use((req, res, next) => { 
  console.log('모든 요청에 다 실행됩니다.');
  next();
});

// 서버에게 LOG 그리고 에러가 발생할 경우, 에러를 throw. (여기서, next는 다음, 미들웨어로 넘어가는 함수. 떠넘겨버리기~)
app.get('/', (req, res, next) => {
  console.log('GET / 요청에서만 실행됩니다.');
  next();
}, (req, res) => {
  throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
});

// 마지막으로, 모두의 에러를 받아 에러를 출력하는 메세지 함수.
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
})

// 이 URL의 값 즉, 서버의 값을 가져온다. 값은 req와 res 2가지로 나뉜다.
app.get('/', (req, res) => {
  // res.send('Hello, Express');
  // 서버에 다음 경로의 파일을 보낸다. (index.html) 이러한 형태로 html파일이 보여지는 것.
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

// 서버를 Port: 3000으로 실행함과 동시에 LOG 출력.
app.listen(app.get('port'), () => { console.log(app.get('port'), '번 포트에서 대기 중') });

