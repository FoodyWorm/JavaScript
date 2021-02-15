/*/ express서버를 만들기 위해 express 모듈 저장.
const express = require('express');

// 좀 더 간결하게 express를 사용하기 위해 app에 모든 함수를 저장.
const app = express();

// http 모듈 저장.
const http = require('http');

// exprss형식으로 서버를 제작합니다.
const server = http.createServer(app);

// express 서버가 소켓통신이 가능하도록 합니다.
const io = require('socket.io')(server);

// 파일을 주고받을 수 있도록 합니다.
const fs = require('fs');

'use strict'
// 서버의 socket.io() 모듈의 함수를 socket에 저장.
var socket = io();

// 서버에 connect이벤트가 발생하면, 다음 함수를 실행.
socket.on('connect', function(){
  // 연결 LOG 출력.
  console.log('connect');
  // 유저의 이름을 name변수에 저장.
  var name = prompt('이름을 입력해주세요.');
  // 소켓에 새로윤 유저가 연결되면, name을 서버로 발신.
  socket.emit('newUserConnect', name);
  
});

// 커스텀 이벤트 연결. html템플릿 info에 서버 데이터를 바인딩.
socket.on('Client Login', function(data) { 
  var info = document.getElementById('info'); 
  info.innerHTML = data.message; 
});

*/