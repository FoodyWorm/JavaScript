// 각 모듈을 저장합니다.
var fs = require('fs');
var express = require('express');
var app = express();
var http = require('http');
// exprss형식으로 서버를 제작합니다.
var server = http.createServer(app);
var io = require('socket.io')(server);

server.listen(8080, () => { console.log("Server Running"); });

app.get ("/", (req, res) => {
	fs.readFile('src/index.html', function (err, data) {
		if (err) {
			res.writeHead(500);
			return res.end('Error loading index.html');
		}
		res.writeHead(200);
		res.end(data);
	});
});

io.on('connection', (socket) => {  
	socket.emit('news', { serverData : "서버 작동" });
	
	socket.on('client login', (data) => { console.log(data); });
		
	socket.on('disconnect', disconnect => { console.log('접속이 종료되었습니다.'); });

});
