// 필요한 모듈을 요청하여 저장. //
// File System의 약자로, 파일을 불러오거나 전송할 때 사용.
var fs = require('fs');

// Express 프레임워크로 HTTP서버를 만들 때, 좀 더 쉽고 간편하게 제작하도록 도와줌.
var express = require('express');

// 프레임워크에 기능들을 app에 모두 저장.
var app = express();

// Express 서버를 '127.48.0.1:3030' 로 생성하고, 이 서버로 접속한 클라이언트에 정보를 출력하고 "res.send로 응답" //
// 서버 생성 부분.
app.listen(3030, "127.48.0.1", () => { 
  console.log("\nServer Start... URL: 127.48.0.1:3030");
});

// 서버 접속 요청에 대한 응답부분.
app.get("/", (req, res) => {
  console.log("- 요청자 URL: " + req.url + ", 요청자 IP: " + req.ip);
  res.send("Hello, Welcome to Synchronous_Test2");

// 동기 & 비동기 테스트 구간 //
// 첫번째 함수.
console.log("순서:", 1, ", 실행시간:",(Date.now() * 0.001) % 1);

// 두번째 함수. ('Sync' 동기는 오류가 없이 잘 출력이 되지만, 비동기 'readFile'로 바꾸면 순서가 바뀜. 비동기라서 순서를 지키지 않아 완료되기도 전에 바로 다음 구문을 읽어버림.)
var data = fs.readFile('./src/example_code.txt', 'utf-8', function(err, data) {
  console.log("순서:", 2, ", 실행시간:",(Date.now() * 0.001) % 1, "Data:", data.toString());
});

// 세번째 함수.
console.log("순서:", 3, ", 실행시간:",(Date.now() * 0.001) % 1);

});




