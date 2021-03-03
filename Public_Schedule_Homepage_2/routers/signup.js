////////////////////////////////////////////////////////////////////////////////////
// mysql문을 사용하기 위한 모듈을 저장.
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var path = require('path');

////////////////////////////////////////////////////////////////////////////////////
// mysql 접속 옵션 설정.
var connection = mysql.createConnection({
  host: '192.168.0.12',
  port: 3306,
  user: 'root',
  password: '123123',
  database: 'user_database'
});

// 회원 INDEX & grade
var index = 0;
var grade = "basic"

////////////////////////////////////////////////////////////////////////////////////
// 홈페이지에 signup 요청이 오면, 요청자의 정보를 JavaScript로 전송.
router.post('/', (req, res) => {
  // FoodyWorm 세션 접속 시도.
  connection.connect();
  
  // 쿼리 명령문 (Insert)
  //var insert_data = "Insert Into users (userIndex, userName, id, pw, department, grade) VALUES ('" + req.body.id + "', '" + req.body.pw + "')";
  var insert_data = "Insert Into users (userIndex, userName, id, pw, department, grade) VALUES ('" + index + "', '" + req.body.mb_name + "', '" + req.body.mb_id + "', '" +req.body.mb_pw + "', '" + req.body.mb_department + "', '" + grade + "')"; 
  index++;

  //users 테이블을 대상으로 데이터 저장, 쿼리 명령문 실행.
  connection.query(insert_data, (err, result) => {
    if(err) { throw err; }
    console.log("Insert Data");
    console.log(result); 
  });

  // 회원가입을 완료한 사용자에게 보여줄 페이지.
  res.sendFile(path.join(__dirname, '../public/html/login.html'));
});

module.exports = router;
