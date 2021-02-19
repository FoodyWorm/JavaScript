var result = document.querySelector("#Asynchronous_result");

var datas = [];
datas.push(1);

setTimeout(() => {
  (async function (x) {
    datas.push(x);
  })(2);
}, 100);
datas.push(3);



setTimeout(() => {
   // 결과값 전송
   result.appendChild(document.createTextNode(datas));
}, 100);








/*
var result = async function() { return 'B'};
console.log('A');
console.log(result().then());
console.log('C');

*/

/*
var result = document.querySelector("#Asynchronous_result");

// Text노드 생성
result.appendChild(document.createTextNode("content"));
*/