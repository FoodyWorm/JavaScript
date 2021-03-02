////////////////////////////////////////////////////////////////////////////////////
// 사용하기 위한 모듈을 저장.
var express = require('express');
var router = express.Router();
var path = require('path');
var mysql = require('mysql');

////////////////////////////////////////////////////////////////////////////////////
// mysql 접속 옵션 설정.
var connection = mysql.createConnection({
  host: '192.168.0.12',
  port: 3306,
  user: 'root',
  password: '123123',
  database: 'user_database'
});

// 쿼리 명령문 (Select) - 속성 id, pw만 검색.
var select = "SELECT DISTINCT id, pw FROM users";

////////////////////////////////////////////////////////////////////////////////////
// 홈페이지에 signup 요청이 오면, 요청자의 정보를 JavaScript로 전송.
router.post('/', (req, res) => {
  // 데이터베이스 접속
  connection.connect();
  
  // users 테이블을 대상으로 데이터 조회, 쿼리 명령문 실행. (JSON.stringify는 만능이다...!)
  connection.query(select, (err, result, fields) => {
    if(err) { throw err; }
      console.log("테이블 현재 내용");
      console.log(result);
      console.log(typeof(result));
      console.log(JSON.parse(JSON.stringify(result)));
      // 데이터베이스에서 가져온 값을 JSON.stringify로 나열하고, JSON.parse로 JSON파일로 전환.
      var json_datas = JSON.parse(JSON.stringify(result));
      var datas = JSON.stringify(result);
      
      
      console.log(json_datas);
      console.log(datas);      
    
      res.send(result);
  
  });

  //res.sendFile(path.join(__dirname, '../html/signup.html'));
});

module.exports = router;