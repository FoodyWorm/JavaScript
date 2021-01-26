// 화면 전체에 HTML요소가 모두 준비가 되면 JavaScript를 실행. (JavaScript 방법) //
window.onload = function strict() {
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));
  
  var tool = new tool();

  var c = Shape.Circle(200, 200, 80);
  c.fillColor = 'black';
  var text = new PointText(200, 200);
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = 20;
  text.content = 'hello World';

  // strict(엄격한) 함수안에 코드는 엄격하게 다뤄집니다. //
  'use strict' //(실수들을 바로잡아줍니다! 그리고 미래 ECMAScript의 진화에 대비합니다!)
}




// 화면 전체에 HTML요소가 모두 준비가 되면 JavaScript를 실행. (jQuery 방법) //
/*
$(document).ready(function() {
   
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));
  
  var tool = new tool();

  var c = Shape.Circle(200, 200, 80);
  c.fillColor = 'black';
  var text = new PointText(200, 200);
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = 20;
  text.content = 'hello World';

  'use strict'


});

*/