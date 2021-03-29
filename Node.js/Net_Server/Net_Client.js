// TCP 임시 클라이언트를 구현하기 위해 net객체를 저장.
const net = require('net');

// 2043 포트로 TCP형식으로 접속하여, 클라이언트를 생성. 보낼 데이터는 다음과 같다.
let client = net.connect(2043, () => { 
  console.log("\n\tCreate Client & Send Data");
  client.setEncoding('utf-8');
  client.write('Client Data');
  console.log("\t-송신 데이터: " + 'Client Data\n');
});

// 클라이언트가 접속되면, Connect Complete!를 출력.
client.on('connect', () => { console.log("\tConnect Complete!"); });

// 서버로 부터 온 data를 출력하고, 연결을 종료
client.on('data', (data) => { console.log("\t-수신 데이터: " + data.toString() + "\n"); });

// 클라이언트에 에러가 발생하면, 에러를 출력.
client.on('error', (err) => { console.log(err); });

// 클라이언트가 종료되면, Disconnected from Server를 출력.
client.on('end', () => { console.log("\tDisconnected from Server\n") });