// 필요한 모듈 저장. //
const express = require('express');
var app = express();

// 서버 실행 함수 //
async function start_Server() {
  app.listen(3000);
  app.get('/', (req, res) => { 
    console.log("Server Start");
    res.send("Hello, Welcome to Synchronous_Test3");
  });
}
// 서버 실행. //
start_Server();

// 동기 & 비동기 테스트 구간 // 
// Promise - 반복으로 사용하기 (resolve()의 위치에 따라 Done의 위치가 바뀐다. 이는, resolve함수가 than()에 영향을 준다는 것을 알 수 있게 해준다.) //
function test1() {
  return new Promise((resolve, rejects) => {
    for(let i=0; i<5; i++) {
      setTimeout( () => {
        console.log("\nTest1: " + i);
        resolve();
      }, i * 1000); //time
    } //for 
  });//promise
}// function

// Promise를 반환하는 함수는 then함수 사용이 가능하며, 반드시 resolve나 rejects를 반환해야 작동이된다.
test1().then(function(){
  console.log('Done');
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 재귀함수를 사용한 Promise 테스트 - resolve의 위치와 상관없이 해결하는 방법 //
const array = [1, 2, 3, 4, 5];
let index = 0;
test2();

// 재귀함수의 메인이며, item값을 가져오는 부분
function test2() {
  const item = array[index];

  
  if(array.length == index){
    // return이 될 때, 이 재귀함수를 빠져나가게 됨.
    return console.log('Done');
  }else{
    test3(item).then(test2);
    index++;
  }
}

// Promise를 반환하는 동기 함수.
function test3(item) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      console.log("\nTest2: " + item);
      resolve();
    }, 1000);
  });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// async & await 테스트 //

function delay(item) {
  return new Promise(function (resolve, reject) {
    setTimeout(function(){
      console.log(item);
      resolve;
    });
  });
}

//async function test





/*/ 일반 동기 함수Log
// 첫번째 함수. (1)
console.log("순서:", 1, ", 실행시간:",(Date.now() * 0.001) % 1);
// 두번째 함수. (2)
console.log("순서:", 2, ", 실행시간:",(Date.now() * 0.001) % 1);
// 세번째 함수. (3)
console.log("순서:", 3, ", 실행시간:",(Date.now() * 0.001) % 1);
*/