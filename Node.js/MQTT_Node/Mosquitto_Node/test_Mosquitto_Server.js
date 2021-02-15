// 필요한 모듈을 가져와서 저장.
const mqtt = require('mqtt');
const net = require('net');
const net_server = net.createServer(mqtt);
// 서버를 실행함과 동시에 제어할 변수 server에 저장.
const server = mqtt.connect();

// 서버에 접속하면, 관련 LOG를 출력.
server.on('listening', () => {  
  console.log("Server Running... localhost:8010");
});

// 서버에 접속한 socket이 있으면, 주소를 출력.
server.on('connection', (socket) => {
  console.log("접속한 노드 주소: " + socket.address().address);
});

// 서버가 닫히면, 관련 LOG를 출력.
server.on('close', () => { 
  console.log("Server Exit... Lof_off") 
});

// 에러발생시, 관련 LOG를 출력.
server.on('error', (err) => {
  console.log("Error 발생 => ", err);
});

// 8010포트로 서버시작.
server.listen(1883);

