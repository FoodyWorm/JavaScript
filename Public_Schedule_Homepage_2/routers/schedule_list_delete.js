////////////////////////////////////////////////////////////////////////////////////
// mysql문을 사용하기 위한 모듈을 저장. //
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

////////////////////////////////////////////////////////////////////////////////////
// mysql 접속 옵션 설정. //
// 데이터베이스 접속 옵션 생성
var connection = mysql.createConnection({
  host: '192.168.0.12',
  port: 3306,
  user: 'root',
  password: '123123',
  database: 'user_database'
});

// 데이터베이스 접속
connection.connect();

// 쿼리 명령문 (delete) //
var delete_data = null;


////////////////////////////////////////////////////////////////////////////////////
// 홈페이지에 get_list 요청이 오면, list 노드를 생성해서 응답.
router.post('/', (req, res) => {
  console.log("삭제 요청이 도착하였습니다...");
  console.log("삭제 요청 데이터: " + req.body.List);
  





  res.end();
});


module.exports = router;
