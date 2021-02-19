// 모듈 요청.
const express = require('express');
const fs = require('fs');
const path = require('path');
//const favicon = require('serve.favicon');
//const logger = require('morgan');
//const cookieParser = require('cookie-parser');
//const bodyParser = require('body-parser');
//const routes = require('./routes/index');
//const users = require('./routes/users');
const app = express();

// 포트 저장
app.set('port', 3000);

// 이 서버에서 요청이 오면, index.html 문서를 응답.
app.get('/', (req, res, next) => { 
  res.sendFile(path.join(__dirname, "./src/index.html"));
  //next();
});

// 이 서버에 get 액션이 취해지면, 이 함수를 실행.
app.use('/', (req, res, next) => {
  console.log("서버 접속자 주소: " + res.connection.address().address);
  next();
});

// 경로 /getjson 으로 요청이 오면, fs.readFile로 Json파일을 가져와 데이터 응답.
app.get('/getjson', function(req, res) {
  fs.readFile('./src/test.json', 'utf-8', function(err, data) { 
    console.log("가져온 Json파일: " + data);
    res.send(data);

  });
}); 

// 경로 /getjson:name 으로 요청이 오면, fs.readFile로 Json파일을 가져와 데이터 응답.
app.get('/getjson/:id', function(req, res) {
  fs.readFile('./src/test.json', 'utf-8', function(err, data) { 
    console.log("가져온 Json파일: " + data);
  
    // html파일을 json파일로 전환.
    var json_datas = JSON.parse(data);

    // Json 객체에서 (obj+id)에 해당되는 값을 
    var json_data_id = json_datas['obj' + req.params.id];
    console.log("요청에 응답하여 보내는 JSON데이터\n" + JSON.stringify(json_data_id));
    // json형태를 일반 데이터로 전환하여 응답.
    res.send(JSON.stringify(json_data_id));

  });
});

// 경로 /postjson/id 으로 요청이 오면, fs.readFile로 Json파일을 가져와 데이터를 추가.
app.post('/postjson', function(req, res) {
  fs.readFile('./src/test.json', 'utf-8', function(err, data) { 
    console.log("가져온 Json파일: " + data);
    
    // html파일 => Json파일로 변환.
    var json_datas = JSON.parse(data);
    console.log(json_datas);
    
    // Json파일에 데이터를 추가.
    json_datas['test1'] = obj['obj4'];
    console.log(json_datas);
    
    res.send(json_datas);

  });
});

// 경로 /putjson/id 로 요청이 오면, fs.readFile로 Json파일을 가져와 데이터를 수정.
app.put('/putjson/:id', function(req, res) {
  fs.readFile('./src/test.json', 'utf-8', function(err, data) {
    console.log("가져온 Json파일: " + data + "\n");

    console.log("Json파일을 객체로 전환 " +"\n");
    var json_datas = JSON.parse(data);

    console.log("호출된 객체를 추출" + "\n");
    var json_data = json_datas['obj' + req.params.id];

    console.log("객체에 해당되는 값을 수정." + "\n");
    json_data.name = "put_object" + req.params.id;

    console.log("수정된 데이터 전송." + "\n");
    res.send(json_data);
    console.log(json_datas);
  });
  
  
});

// 경로 /postjson 으로 요청이 오면, fs.readFile로 Json파일을 가져와 데이터를 삭제.
app.delete('/delete/:id', function(req, res) {
  fs.readFile('./src/test.json', 'utf-8', function(err, data) {
    console.log("가져온 JSON파일: " + data + "\n");

    console.log("Json 파일을 객체로 전환\n");
    var json_datas = JSON.parse(data);

    console.log("호출된 객체를 삭제\n");
    delete json_datas['obj' + req.params.id];

    res.send(json_datas);
    console.log(json_datas);

  });


});


// 서버를 3000 포트로 실행 및 로그 출력.
app.listen(app.get('port'), () => { 
  console.log(app.get('port'), '번 포트에서 대기 중...');
});



// 테스트 JSON 파일
var obj = {
  "obj4" : {
    "name" : "object4",
    "password" : "444",
    "index" : 4
  }
}

var test = {
  "test" : {
    "name" : "test",
    "password" : "ttt",
    "index" : 5
  }
}
//console.log(obj);


/*
app.get('/', (req, res, next) => {
  console.log('GET / 요청시에서만 실행됩니다.');
  next();
}, (req, res) => {
  throw new Error('에러는 에러 처리 미들웨어로 갑니다.');

});

app.use((err, req, res, next) => {
  //console.error(err);
  res.status(500).send(err.message);
  next();
});
*/