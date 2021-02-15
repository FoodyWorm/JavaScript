// TCP 서버를 구현하기 위해 net객체를 저장.
const net = require('net');

//서버의 포트번호는 2043
const port = 2043;

// 서버를 제작하며 옵션은 다음과 같다. 이 서버에 socket이 오면, 이 함수를 실행.
let server = net.createServer((socket) => {
    
  // 소켓의 주소메소드에서 일반주소와 함께, connected 출력.
  console.log("소켓 주소 - " + socket.address().address + " connected.");
  
  // 소켓은 utf-8로 해석 즉, 인코딩.
  socket.setEncoding('utf-8');
    
  // 클라이언트로 부터 온 데이터가 있다면, data를 문자열로 출력.
  socket.on('data', (data) => { console.log(data.toString() + " 수신\n"); });
  
  // 데이터가 들어온 곳으로 다시, 소켓을 재전송하고 클라이언트와 서버를 종료.
  // socket.pipe();
  socket.setTimeout(10, safeEnd => { 
    // 클라이언트에게 보낼 소켓의 데이터를 작성 후 전송.
    socket.write("Server Data", () => { console.log("Server Data 송신\n"); });
    // 클라이언트와 서버를 종료.
    socket.end( and => { server.close(); });   
  });

});

// 만약, 서버에 error가 발생하면 에러를 출력.
server.on('error', (err) => { throw err; });

// 만약, 서버에 클라이언트 접속이 끊기면, Client Disconnected 출력.
server.on('close', () => { console.log("Client Disconnected") });

// 서버를 이 port로 실행한다. 잘 실행되면, 다음 문구와 현재 port번호를 함께 출력.
server.listen(port, () => { console.log('server running at Port: ' + port); });