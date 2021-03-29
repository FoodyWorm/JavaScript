// HTTP 모듈 로드
const http = require('http');

// request 할 서버의 정보를 options으로 저장.
const options = {
  host: '127.0.0.1',
  path: '/',
  port: '8000',
  method: 'POST'
};

// 클라이언트가 요청할 때와 응답할 때의 설정을 저장합니다.
let client = http.request(options, (response) => {
  console.log("\n\tHTTP 서버에 접속을 시도합니다.");

  // 접속 후에 수신 데이터가 존재하면, 데이터를 출력.
  response.on('data', (data) => { console.log("\n\tResponse Data: " + data.toString()); });
  
  // 접속 후에 수신이 마무리되면, 관련 문구를 출력.
  response.on('end', end => { console.log("\n\t수신을 마칩니다.") });

});

// 클라이언트에 에러가 발생하면, 관련 문구를 출력.
client.on('error', (err) => { console.log("\n\t에러가 발생했으며, 내용은 다음과 같습니다. => ", err) });

// 클라이언트이 접속이 종료되면, 관련 문구를 출력.
client.on('close', close => console.log("\n\tClient가 접속이 끊겼습니다.\n"));

// 서버로 부터 접속을 종료.
client.end();
