// HTTP 모듈 로드
const http = require('http');

// HTTP 서버를 구성합니다. socket이 아닌 request와 response으로 나누어 구성.
let server = http.createServer(function (request, response) {
  response.statusCode = 200;
  //response.setHeader('Content-Type', 'text/plain');
  response.end('Connection Server!!!');
  
});

//서버를 8000포트로 실행하고, 로그를 출력.
server.listen(8000, () => { console.log("Server running at http://127.0.0.1:8000/"); });

// 서버가 실행되면, 로그를 출력.
server.on('listening', listen => console.log("Server Listen"));

// 만약, 서버 연결된 client가 있으면 관련 정보를 출력.
server.on('connection', (client) => { console.log("Client Adress" + client.address().address) });

// 만약, 에러발생시 원인출력
server.on('error', (err) => { console.log("에러가 발생했으며, 내용은 다음과 같습니다. => " + err)});


