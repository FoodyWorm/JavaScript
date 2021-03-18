////////////////////////////////////////////////////////////////////////////////////
// mysql문을 사용하기 위한 모듈을 저장. //
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var jsonfile = require('jsonfile');
var path = require('path');

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

////////////////////////////////////////////////////////////////////////////////////
// 홈페이지에 delete 요청이 오면, 해당되는 데이터베이스의 컬럼과 JSON 파일의 데이터를 삭제하기
router.post('/', (req, res) => {
  console.log("삭제 요청이 도착하였습니다...");
  console.log("삭제 요청 데이터: " + req.body.List);
  var delete_Data = req.body.List;
 
  // 쿼리 명령문 (delete) //
  var delete_query = "DELETE From schedules WHERE schedule_Name = '" +   delete_Data  +"'";
  connection.query(delete_query, (err, result) => {
    if(err) { throw err }
    console.log("\n삭제가 완료되었으며, 삭제된 데이터는 다음과 같습니다.\n" + result);

  });

  // 해당 JSON 파일 삭제 //
  // JSON 파일 불러오기
  jsonfile.readFile(path.join(__dirname, '../public/json/list.json'), (err, data) => { 
    console.log("\n현재, JSON 데이터: " + data);
    
    // JSON데이터와 삭제요청 데이터를 비교하기
    for(var i=0; i<data.length; i++) {
      if(data[i].schedule_Name == delete_Data){
        // 일치하면 그 해당 [i]를 삭제 (delete 함수사용.)
        console.log("삭제 요청 데이터: " + data[i].schedule_Name);
        delete data[i].schedule_Name;
        
        // 삭제된 jsondata를 다시 저장합니다.
        jsonfile.writeFile(path.join(__dirname, '../public/json/list.json'), data, (err) =>{
          if(err) {throw err; }
          console.log("Json 삭제가 완료되었습니다.");


          res.end();
        });
        
      }

    }//for();


    
  });//jsonFile.readFile();

  
});//router.post();


module.exports = router;
