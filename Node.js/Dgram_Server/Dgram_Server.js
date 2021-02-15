// UDP서버를 만들기 위해 dgram 모듈 요청
const dgram = require('dgram');
const port = 8080;
const host = '127.0.0.1';

// 서버(socket)는 udp4 형식으로 생성.
let server = dgram.createSocket('udp4');

// 서버의 소켓에 주소(Port, Host)를 기입.
server.bind(port, host, socket_Info => { console.log("\n\t Socket의 Port와 Host를 지정하였습니다."); });

// 서버가 시작되면, 서버의 주소를 출력.
server.on('listening', listen => { console.log("\n\t Listening: " + server.address().address + "\n"); });

// 서버에 에러가 발생하면, 에러를 출력.
server.on('error', (err) => { console.log("\n\t 에러 발생 => " + err); });

// 서버에 수신된 데이터가 존재하면, 그 데이터를 출력.
server.on('message', (message) => { 
  console.log("\n\t 수신 데이터: " + message);
  server.send("Server Data", 6060, host, sendData => { console.log("\t 송신 데이터: " +  "Server Data") });
});

// 서버에 클라이언트가 접속하면, Client Connection을 출력.
server.on('connect', connection => { console.log("\n\t Client Connection"); });

// 서버가 종료돠면, Server Close를 출력.
server.on('close', close => { console.log("\n\t Server Close\n"); });
