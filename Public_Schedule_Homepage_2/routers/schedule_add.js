////////////////////////////////////////////////////////////////////////////////////
// mysql문을 사용하기 위한 모듈을 저장. //
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

// 임시 Index, start_Day, end_Day
var index = 0;
var start_Day = "start_test";
var end_Day = "end_test";


////////////////////////////////////////////////////////////////////////////////////
// 홈페이지에 /schedule/add 요청이 오면, 스케줄 정보를 데이터베이스에 저장.
router.post('/', (req, res) => {
  // FoodyWorm 세션 접속 시도.
  connection.connect();

  // 쿼리 명령문 (Insert)
  //var insert_data = "Insert Into users (userIndex, userName, id, pw, department, grade) VALUES ('" + req.body.id + "', '" + req.body.pw + "')";
  var insert_data = "Insert Into schedules (schedule_Index, schedule_Name, schedule_Days, start_Day, end_Day, userName, department, content) VALUES ('" + index + "', '" + req.body.add_title_content + "', '" + req.body.add_days_content + "', '" + start_Day + "', '" + end_Day + "', '" + req.body.add_person_content + "', '"  + req.body.add_department_content + "', '"  + req.body.list_add_content + "')";

  // schedules 테이블을 대상으로 데이터 저장, 쿼리 명령문 실행.
  connection.query(insert_data, (err, result) => {
    if(err) { throw err; }
    console.log("Insert Data");
    console.log(result);
    
    // 스케줄 데이터를 다 넣고나서, 보여줄 페이지. (메인 페이지)
    res.sendFile(path.join(__dirname,'../public/html/schedule_list_add.html'));
  });

  
});

module.exports = router;
