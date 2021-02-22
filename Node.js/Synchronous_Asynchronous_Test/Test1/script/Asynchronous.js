var result = document.querySelector("#Asynchronous_result");

// Dict
var datas = [];

// (1)
datas.push(1);

// (2)
setTimeout(() => {
  (async function (x) {
    datas.push(x);
  })(2);
}, 100);

// (3)
datas.push(3);

// result
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