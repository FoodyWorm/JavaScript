// mysql문을 사용하기 위한 모듈을 저장.
var mysql = require('mysql');
//////////////////////////////////////////

// mysql 접속 옵션 설정.
var connection = mysql.createConnection({
  host: '192.168.0.12',
  port: 3306,
  user: 'root',
  password: '123123',
});

// FoodyWorm 세션 접속 시도.
connection.connect();

// 쿼리 명령문 (Create Database)
var create_database = "Create DataBase Test2";

// 쿼리 명령문 (Use)
var use_database = "Use Test2";

// 쿼리 명령문 (Show Databases)
var show_databases = "Show databases";

// FoodyWorm을 대상으로 '데이터베이스 제작', 쿼리 명령문 실행.
connection.query(create_database, () => { console.log("데이터베이스 제작 완료."); });

// FoodyWorm을 대상으로 '데이터베이스 사용', 쿼리 명령문 실행.
connection.query(use_database, () => { console.log("데이터베이스 사용 지정 완료."); });

// FoodyWorm을 대상으로 '데이터베이스 목록', 쿼리 명령문 실행.
connection.query(show_databases, (err, result) => { 
  console.log("현재, 데이터베이스 목록"); 
  console.log(result);
});

// 데이터베이스 연결 종료.
connection.end();
