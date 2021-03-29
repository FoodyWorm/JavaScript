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

// 쿼리 명령문 (create)
// var create_table = 'CREATE TABLE test_table(name VARCHAR(255), address VARCHAR(255))';

// 쿼리 명령문 (SHOW TABLES)
var show_table = 'SHOW TABLES';

// 쿼리 명령문 (DESC)
var desc = "Desc test_table";

// test2 데이터베이스 대상으로 테이블 생성, 쿼리 명령문 실행. (err를 받지 않으면, 작성이 안되니 주의.)
// connection.query(create_table, (err) => { console.log("테이블 제작 완료.", err); });

// test2 데이터베이스 대상으로 테이블 목록 확인, 쿼리 명령문 실행.
connection.query(show_table, (err, result) => { 
  console.log("테이블 현재 목록");
  console.log(result); 
});

// test2 데이터베이스 대상으로 테이블 구조(test_table) 확인, 쿼리 명령문 실행.
connection.query(desc, (err, result) => { 
  console.log("테이블 현재 구조");
  console.log(result); 
});

// 데이터베이스 연결 종료.
connection.end();