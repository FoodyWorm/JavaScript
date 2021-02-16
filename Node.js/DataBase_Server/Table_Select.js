// mysql문을 사용하기 위한 모듈을 저장.
var mysql = require('mysql');
//////////////////////////////////////////

// mysql 접속 옵션 설정.
var connection = mysql.createConnection({
  host: '192.168.0.12',
  port: 3306,
  user: 'root',
  password: '123123',
  database: 'test2'
});

// FoodyWorm 세션 접속 시도.
connection.connect();

// 쿼리 명령문 (Select)
var select = "SELECT * FROM test_table";

// test_table 테이블을 대상으로 데이터 조회, 쿼리 명령문 실행.
connection.query(select, (err, result, fields) => {
  if(err) { throw err; }
  console.log("테이블 현재 내용");
  console.log(result);
});

// 데이터베이스 연결 종료.
connection.end();
