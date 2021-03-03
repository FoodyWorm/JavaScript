////////////////////////////////////////////////////////////////////////////////////
// 사용하기 위한 모듈을 저장. //
const express = require('express');
const router = express.Router();
var path = require('path');
const mysql = require('mysql');

////////////////////////////////////////////////////////////////////////////////////
// mysql 접속 옵션 설정. //
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
// 홈페이지에 login 요청이 오면, 실행할 함수. //
router.post('/', (req, res) => {
  // 데이터베이스 접속
  //connection.corsnnect();
  
  // users 테이블을 대상으로 데이터 조회, 쿼리 명령문 실행. (JSON.stringify는 만능이다...!)
  connection.query(select, (err, result, fields) => {
    if(err) { throw err; }

      // 데이터베이스에서 가져온 값을 JSON.stringify로 배열 형식으로 나열하고, JSON.parse로 JSON파일로 전환.
      var json_datas = JSON.parse(JSON.stringify(result));
      
      // 로그인 정보와 회원정보를 비교. //
      for(var i=0; i<json_datas.length; i++) {
        // 로그인 정보와 회원정보가 일치하게 될 경우.
        if((json_datas[i].id == req.body.mb_id) && (json_datas[i].pw == req.body.mb_pw)) {
          console.log("login try");
          res.sendFile(path.join(__dirname, '../public/html/main.html'));
          break;
          //res.end();
        }
        // 로그인 정보와 회원정보가 모두 일치하지 않을 경우.
        else if(i >= json_datas.length-1){
          console.log("login Fail");
          res.sendFile(path.join(__dirname, '../public/html/login.html'));
          
        }
      };
      
  });

});

module.exports = router;