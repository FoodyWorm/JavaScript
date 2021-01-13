//\/\ 엄격한 JavaScript 규격관리 공간 /\/\
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