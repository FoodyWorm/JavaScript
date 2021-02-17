const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// 포트 저장
app.set('port', 3000);

// 이 서버에서 요청이 오면, index.html 문서를 응답. // 오류로 인해 hello world로 대체..
app.get('/', (req, res, next) => { 
  res.sendFile(path.join(__dirname, "./src/index.html"));
  next();
});

// 이 서버에 get 액션이 취해지면, 이 함수를 실행.
app.use('/', (req, res, next) => {
  console.log("서버 접속자 주소: " + res.connection.address().address);
});

// 서버를 3000 포트로 실행 및 로그 출력.
app.listen(app.get('port'), () => { 
  console.log(app.get('port'), '번 포트에서 대기 중...');
});








/*
app.get('/', (req, res, next) => {
  console.log('GET / 요청시에서만 실행됩니다.');
  next();
}, (req, res) => {
  throw new Error('에러는 에러 처리 미들웨어로 갑니다.');

});

app.use((err, req, res, next) => {
  //console.error(err);
  res.status(500).send(err.message);
  next();
});
*/