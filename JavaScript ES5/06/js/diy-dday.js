var now = new Date(); // 현재 날짜를 저장
var firstDay = new Date("2018-11-01"); // 처음 만난 날을 저장

var toNow = now.getTime(); // 현재 날짜를 밀리초로
var toFirst = firstDay.getTime(); // 처음 만난 날을 밀리초로
var passedTime = toNow - toFirst; // 지금까지 만난 밀리초 탄생

var passedDay = Math.round(passedTime/(1000 * 60 * 60 * 24)); // 일수로 변환

document.querySelector("#accent").innerHTML = passedDay + "일"; // 값 할당


function calcDate(days) {
  var future = toFirst + days * (1000 * 60 * 60 * 24); 
  var someday = new Date(future);
  
  var year = someday.getFullYear();
  var month = someday.getMonth();
  var day = someday.getDay();
  
  document.querySelector("#date" + days).innerHTML = year + "년 " + month + "월 " + parseInt(day + 1) + "일";
  }
  
  calcDate(100);
  calcDate(200);
  calcDate(365);
  calcDate(500);
