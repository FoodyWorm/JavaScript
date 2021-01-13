// 지금까지 만난 날

var now = new Date();  //오늘 날짜 정보를 Date 객체의 인스턴스 now 객체로 만듭니다.
var firstDay = new Date("2018-11-01");  //처음 만난 날의 날짜 정보를 firstDay 객체로 만듭니다.

var toNow = now.getTime(); //오늘 날짜를 기준으로 밀리초로 바꿈.
var toFirst = firstDay.getTime(); // 처음 만난 날을 밀리초로 바꿈.
var passedTime = toNow - toFirst; // 처음 만난 날과 오늘 사이의 차이(밀리초 값).

var passedDay = Math.round(passedTime/(1000 * 60 * 60 * 24)); //밀리초를 날짜 수로 변환한 후 반올림.

document.querySelector("#accent").innerHTML = passedDay + "일"; //#accent 영역에 표시.

function calcDate(days) {
      // 기념일 100일 계산
    var future = toFirst + days * (1000 * 60 * 60 * 24); // 처음 만난 날에 100일을 더합니다.
    var someday = new Date(future); //future 값을 사용해 Date 객체의 인스턴스를 만듭니다.

    var year = someday.getFullYear();
    var month = someday.getMonth();
    var day = someday.getDay();

    document.querySelector("#date" + days).innerHTML = year + "년 " + month + "월 " + parseInt(day + 1) + "일";
  }

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);