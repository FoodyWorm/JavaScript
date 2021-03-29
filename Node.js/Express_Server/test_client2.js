/*var express = require('express');
var app = express();
var http = require('http');
// exprss형식으로 서버를 제작합니다.
var server = http.createServer(app);
var io = require('socket.io')(server);

var socket = io.connect('http://localhost:8080');
socket.on('new', function(data) {
  console.log(data);
  socket.emit('Client Login', { clientData : '클라이언트 접속' });
});*/


var socket = io.connect('http://localhost:8080');

socket.on('news', function (data) {
	console.log(data);
	socket.emit('client login', { clientData : '클라이언트 접속' });
});