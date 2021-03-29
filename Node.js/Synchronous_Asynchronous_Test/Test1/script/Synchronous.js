var result = document.querySelector("#Synchronous_result");

var datas = [];
datas.push(1);

(function (x) {
  datas.push(x);
})(2);

datas.push(3);

  // 결과값 전송
result.appendChild(document.createTextNode(datas));






/*
var result = function () { return 'B'};
console.log('A');
console.log(result());
console.log('C');
//var result = function () { return 'B'};

*/




