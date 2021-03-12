////////////////////////////////////////////////////////////////////////////////////
// mysql문을 사용하기 위한 모듈을 저장. //
var express = require('express');
const { readFile } = require('fs');
var router = express.Router();
var mysql = require('mysql');
const path = require('path');
const fs = require('fs');
const jsonfile = require('jsonfile');



//////////////////////////////////////////////////////////////////////////////////////
//const jsdom = require("jsdom");
//const { JSDOM } = jsdom;

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

// 쿼리 명령문 (Select) - 속성 id, pw만 검색. //
var get_data = "SELECT DISTINCT schedule_Name FROM schedules";



////////////////////////////////////////////////////////////////////////////////////
// 홈페이지에 get_list 요청이 오면, list 노드를 생성해서 응답.
router.get('/', (req, res) => {
  
  // schedules 테이블을 대상으로 데이터 조회, 쿼리 명령문 실행. 
  connection.query(get_data, (err, result) => {
    if(err) { throw err; }

    // 데이터베이스에서 가져온 값을 JSON.stringify로 배열 형식으로 나열하고, JSON.parse로 JSON파일로 전환.
    var json_datas = JSON.parse(JSON.stringify(result));

    // Save Json 로그
    console.log("Save Json... \n");

    // JSON 파일 저장하기
    jsonfile.writeFile(path.join(__dirname, '../public/json/list.json'), json_datas, function(err) {
      if (err) { console.log(err) }
      console.log("JSON데이터를 파일에 성공적으로 저장하였습니다.")
    });
    
    // JSON 파일 불러오기
    fs.readFile(path.join(__dirname, '../public/json/list.json'), (err, data) => { 
      console.log("Get Json: " + data);
      // 완성된 list_content를 전송
      res.send("");
    });

    
    
  });
});

module.exports = router;


////////////////////////////////////////////////////////////////////////////////////
/*/ document를 사용하기 위한 객체 생성 //
// JSDOM 객체에 옵션을 주고 생성.
const dom = new JSDOM(
'<!DOCTYPE html>' +
'<html>' +
'<head>' + 
  '<style>' +
    'span{color:red;}' +
  '</style>' +
'</head>' +

'<body>' +
  'test' +
'</body>' +
  '</html>', {
  // 이 JSDOM의 렌더링 타입
  contentType: "text/html",
  // HTML 파서에 의해 생성 된 위치 정보 보존여부
  includeNodeLocations: true,
  // 저장 영역에 대한 코드 단위의 최대 크기
  storageQuota: 10000000,
  // 페이지 내에서 스크립트 실행을 활성화 appendChild() 등등
  runScripts : "dangerously",
  // 모든 리소스를 로드할 수 있도록 합니다. 혹은 onClick() 등등 (외부만 쓴다면 "outside-only")
  resources: "usable"
});

// document를 좀 더 수월하게 사용할 수 있도록 Dom객체를 생성.
const Dom = dom.window.document;

// 새로운 jsdom
const resourcesLoader = new jsdom.ResourceLoader({
  proxy: "http://127.0.0.1:3030"
});

const dom2 = new JSDOM('', { resources: resourcesLoader });
const Dom2 = dom2.window.document;
console.log(Dom2.body.childNodes.length);

////////////////////////////////////////////////////////////////////////////////////
// 홈페이지에 get_list 요청이 오면, list 노드를 생성해서 응답.
router.get('/', (req, res) => {
  
  // schedules 테이블을 대상으로 데이터 조회, 쿼리 명령문 실행. 
  connection.query(get_data, (err, result) => {
    if(err) { throw err; }

    // 데이터베이스에서 가져온 값을 JSON.stringify로 배열 형식으로 나열하고, JSON.parse로 JSON파일로 전환.
    var json_datas = JSON.parse(JSON.stringify(result));

    console.log("make list... \n");
    // 리스트 생성
    var list_content = Dom.createElement('div');
    list_content.setAttribute("id", "list_content");

    // 리스트에 스케줄을 추가하는 구간 //
    for(schedule_Name in json_datas) {
      // 스케줄 내용을 감싸게 될 P노드 생성
      var p_Tag = Dom.createElement('p');
      p_Tag.setAttribute("class", "p_Tag");
      
      // CheckBox노드 생성
      var checkBox = Dom.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.setAttribute("class", "checkBox");

      // 텍스트 노드 생성
      var textNode = Dom.createElement('span');
      textNode.appendChild(Dom.createTextNode(" " + json_datas[schedule_Name].schedule_Name));
      console.log(json_datas[schedule_Name].schedule_Name);

      // DelButton노드 생성
      var delButton = Dom.createElement("span");
      delButton.appendChild(Dom.createTextNode(" X "));
      delButton.setAttribute("class", "delButton");

      // 밑줄노드 생성
      var underLine = Dom.createElement("hr");

      // List 삭제 이벤트 연결
      delButton.addEventListener("click", () => {
        console.log("Del_Event - Connection!");
        this.parentNode.remove();
      });

      // List 체크완료 이벤트 연결
      checkBox.addEventListener("click", () => {
        if(this.checked == true) {
          console.log("Checkbox_Button - Connection!");
          this.parentNode.childNodes[1].style.textDecorationLine = 'line-through'; 
        } 
        else {
          console.log("Checkbox_Button - Connection!");
          this.parentNode.childNodes[1].style.textDecorationLine = 'none'; 
        } 
      });
      
       // 노드연결
       p_Tag.appendChild(checkBox);
       p_Tag.appendChild(textNode);
       p_Tag.appendChild(delButton);
       p_Tag.appendChild(underLine);
      
       // 완성된 노드를 list_content에 추가
       list_content.appendChild(p_Tag);
    } 


// Script태그를 생성하는 부분
var script = Dom.createElement('script');

// Script태그안에 Script를 작성하는 부분
script.appendChild(Dom.createTextNode(
"\n//연결 테스트\n"+
"console.log('연결완료');\n"+
"console.log(document.body.childNodes);\n" +
"console.log(document.body.childNodes[1].childNodes[0]);\n" +
"var del_Span = document.body.childNodes[1].childNodes[0].childNodes[2];\n" +
"console.log('del_Span: ' + del_Span);\n" +
"console.log('del_Span: ' + document.body.childNodes[1].childNodes.length);\n" +

"del_Span.addEventListener('click', (del_Span) => {\n" +
  "console.log('Del_Event - Connection!');\n" +
  "console.log('thisNode: '+ this.length);\n" +
  "del_Span.parentNode.remove();\n"+
"});\n"

));

// 최종적으로 html 노드를 모두 추가 //
Dom.body.appendChild(list_content);
Dom.body.appendChild(script);



    // 완성된 list_content를 전송
    res.send(Dom.head.innerHTML + Dom.body.innerHTML);
  });
});

module.exports = router;


 // document를 사용하기 위한 객체 생성 //
    // JSDOM 객체에 옵션을 주고 생성.
    const dom = new JSDOM('', {
      // 이 JSDOM이 참조할 URL
      url: "http://localhost:3030/get_list",
      // 이 JSDOM이 참조할 URL
      referrer: "http://localhost:3030/get_list",
      // 이 JSDOM의 렌더링 타입
      contentType: "text/html",
      // HTML 파서에 의해 생성 된 위치 정보 보존여부
      includeNodeLocations: true,
      // 저장 영역에 대한 코드 단위의 최대 크기
      storageQuota: 10000000,
      // 페이지 내에서 스크립트 실행을 활성화 appendChild() 등등
      runScripts : "dangerously",
      // 모든 리로스를 로드할 수 있도록 합니다. 혹은 onClick() 등등 (외부만 쓴다면 "outside-only")
      resources: "usable"
    });

/


// 노드 생성 테스트 했던 것들 //

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