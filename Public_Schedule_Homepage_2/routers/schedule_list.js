////////////////////////////////////////////////////////////////////////////////////
// mysql문을 사용하기 위한 모듈을 저장. //
const { text } = require('express');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

////////////////////////////////////////////////////////////////////////////////////
// mysql 접속 옵션 설정. //
var connection = mysql.createConnection({
  host: '192.168.0.12',
  port: 3306,
  user: 'root',
  password: '123123',
  database: 'user_database'
});

// 쿼리 명령문 (Select) - 속성 id, pw만 검색. //
var get_data = "SELECT DISTINCT schedule_Name FROM schedules";

// 스케줄을 추가할 목록
var list_content = document.querySelector('#schedule_list_content');



    
////////////////////////////////////////////////////////////////////////////////////
// 홈페이지에 signup 요청이 오면, 요청자의 정보를 JavaScript로 전송.
router.get('/', (req, res) => {
  // 데이터베이스 접속
  connection.connect();
  
  // schedules 테이블을 대상으로 데이터 조회, 쿼리 명령문 실행. 
  connection.query(get_data, (err, result) => {
    if(err) { throw err; }

    const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
    var test = dom.window.document.querySelector("p").textContent;
    console.log(dom.window.document.querySelector("p").textContent); // "Hello world"

    res.send(test);
    
    // 데이터베이스에서 가져온 값을 JSON.stringify로 배열 형식으로 나열하고, JSON.parse로 JSON파일로 전환.
    /*var json_datas = JSON.parse(JSON.stringify(result));
     
 
    // Text노드 생성
    var textNode = document.createElement("span");
    textNode.appendChild(document.createTextNode(json_datas[1].schedule_Name));
    textNode.setAttribute("class", "textNode");

    // Text노드 추가
    list_content.appendChild(textNode);
    console.log(list_content);

 
    res.send(list_content);*/
  });

});

module.exports = router;




/*/ 노드 생성 테스트 했던 것들 //
// 스케줄을 추가할 목록
    var list_content = document.querySelector('#schedule_list_content');
    
    ///////////////////////////////// 노드 생성 부분 ///////////////////////////
    for(var i=0; i<=json_datas.length; i++) {

      // P노드 생성
      var list = document.createElement("p");
      list.setAttribute("class", "list");
      
      // CheckBox노드 생성
      var checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.setAttribute("class", "checkBox");

      // Text노드 생성
      var textNode = document.createElement("span");
      textNode.appendChild(document.createTextNode(json_datas[i].schedule_Name));
      textNode.setAttribute("class", "textNode");

      // DelButton노드 생성
      var delButton = document.createElement("span");
      delButton.appendChild(document.createTextNode(delButton));
      delButton.setAttribute("class", "delButton");

      // 밑줄노드 생성
      var underLine = document.createElement("hr");

      // 노드연결
      list.appendChild(checkBox);
      list.appendChild(textNode);
      list.appendChild(delButton);
      list.appendChild(underLine);

      list_content.appendChild(list);
    }
    //////////////////////////////////////////////////////////////////////////////
*/