// 각 모듈을 저장합니다.
const fs = require('fs');
const express = require('express');
const app = express();
const http = require('http');
// exprss형식으로 서버를 제작합니다.
const server = http.createServer(app);
const io = require('socket.io')(server);
const host = '127.0.0.1';

// express 서버에서 정적인 src폴더를 사용할 수 있도록 설정.
app.use(express.static('src'));
app.use(express.static('Express_Client.js'));

// 클라이언트의 정보(요청, 데이터)를 get방식으로 가져온다.
app.get("/", (req, res) => {
  console.log("Get Connection!");
  // fs 모듈로 index.html 파일을 읽어오고, 함수를 실행.
  fs.readFile('src/index.html', (err, data) => { 
    // 에러가 발생하면, 에러출력.
    if(err) {
      res.writeHead(500);
      return res.end('Error Loading index.html');
    }
    // 클라이언트 정보에 200으로 응답하며 데이터를 전송하고 종료.
    res.writeHead(200, {'Content-Tpye' : 'text/html'}).write(data).end();

  });

  // io.sockets.on에 connection 이벤트가 호출되면 실행될 함수를 바인딩.
  io.socket.on('connection', function(socket) {
    // 커스텀이벤트 작성. 서버 작동 발신.
    socket.emit('news', { serverData : "서버 작동" });

    // 커스텀이벤트를 연결.
    socket.on('Client Login', function(data) { 
      console.log(data);

    socket.on('disconnect', function() {
      console.log('접속이 종료되었습니다.');
    });

      // socket.name과 message에 client.name을 저장.
      //socket.name = name;
      //var message = name + '님이 접속했습니다.';
      // 커스텀이벤트 작성. 이름과 메시지를 객체리터럴로 발신.
      //io.socket.emit('updateMessage', {
      //  name : 'SERVER',
      // message : message
      //});

    });//Client Login

  });//connection
  

});//get

// 서버를 8080_Port로 생성합니다.
server.listen(8080, host, start => { console.log('Server Running - localhost:8080'); });