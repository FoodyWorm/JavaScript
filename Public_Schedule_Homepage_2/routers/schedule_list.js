////////////////////////////////////////////////////////////////////////////////////
// mysql문을 사용하기 위한 모듈을 저장. //
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

// 데이터베이스 접속
connection.connect();

// 쿼리 명령문 (Select) - 속성 id, pw만 검색. //
var get_data = "SELECT DISTINCT schedule_Name FROM schedules";

////////////////////////////////////////////////////////////////////////////////////
// document를 사용하기 위한 객체 생성 //
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

const Dom = dom.window.document;
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
    list_content.setAttribute("class", "list_content");

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

       // 노드연결
       p_Tag.appendChild(checkBox);
       p_Tag.appendChild(textNode);
       p_Tag.appendChild(delButton);
       p_Tag.appendChild(underLine);
      
       // 완성된 노드를 list_content에 추가
       list_content.appendChild(p_Tag);
    } 


  
var script = Dom.createElement('script');
  
script.appendChild(Dom.createTextNode(
"//연결 테스트" +
"console.log('연결완료');" +

"// List 삭제 이벤트 연결" +
"delButton.addEventListener('click', delList);" +

"// List 체크완료 이벤트 연결" +
"checkBox.addEventListener('click', checkList);" +

"// List 삭제 이벤트 //" +
"function delList() { this.parentNode.remove(); }" +

"// List 체크완료 이벤트 //" +
"function checkList() {" +
    "if(this.checked == true) { this.parentNode.childNodes[1].style.textDecorationLine = 'line-through'; }" +
    "else { this.parentNode.childNodes[1].style.textDecorationLine = 'none'; }" +
"}"));

// 최종적으로 html 노드를 모두 추가 //
Dom.body.appendChild(list_content);
Dom.body.appendChild(script);


    // 완성된 list_content를 전송
    res.send(Dom.head.innerHTML + Dom.body.innerHTML);
  });
});

module.exports = router;


 /*/ document를 사용하기 위한 객체 생성 //
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

*/


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