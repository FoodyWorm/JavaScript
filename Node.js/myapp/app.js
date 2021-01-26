// 서버 정보
const express = require('express');
const app = express();
const port = 3000;

// 서버 생성
app.get('/', (require, response) => {
  response.send('Hello World!');

});


//서버 연결
app.listen(port, () => {
  console.log('Example app listening at http://localhost:${port}');
})