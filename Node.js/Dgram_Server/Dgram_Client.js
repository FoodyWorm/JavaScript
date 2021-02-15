// UDP 클라이언트를 만들기 위해 dgram 모듈 요청
const dgram = require('dgram');
const port = 6060;
const host = '127.0.0.1';

// 클라이언트(socket)는 udp4 형식으로 생성.
let client = dgram.createSocket('udp4');

// 클라이언트의 소켓에 주소(Port, Host)를 기입.
client.bind(port, host, socket_Info => { console.log("\n\t Socket의 Port와 Host를 지정하였습니다."); });

// 서버로 Client Data를 전송 및 Log 출력.
client.send("Client Data", 8080, host, sendData => { console.log("\n\t 송신 데이터: " + "Client Data"); });

// 서버로 부터 받은 데이터를 출력.
client.on('message', (message) => { 
  console.log("\n\t 수신 데이터: " + message ); 
  client.close( end => { console.log("\n\t 접속을 종료합니다.\n"); });
});