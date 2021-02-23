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

/*/ 동기 & 비동기 테스트 구간 // 
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
// async & await 테스트 //
// 테스트에 필요한 Promise 반환 함수.
function foo(num, sec){
  return new Promise(function(resolve, reject) {
    setTimeout( function(){
        console.log(num);
        resolve("async는 Promise방식을 사용합니다.");
    }, sec);
  });
}

// test 함수 - 1, 2, 3//
async function test(){
  return new Promise(function(resolve, reject) {
    // 테스트 실행함수.
    /*(async function run_test(){
      await foo(1, 2000);
      await foo(2, 500);
      await foo(3, 1000);
    })();
    */
    resolve(
      (async function run_test(){
        await foo(1, 2000);
        await foo(2, 500);
        await foo(3, 1000);
      })()
    );
  });// return Promise
}

// test(); 함수 테스트 결과 //
//test();
// 1. 이 테스트를 하기 위해서는 먼저, Promise를 반환하는 함수를 사용해야만한다. 그래야, 동기적으로 함수를 제어할 수 있다.
// 2. 그 이유는 await가 Promise반환값을 받고, 실행시키는 것 이기 때문이다. async는 단순히 await를 사용하기 위한 수단일 뿐.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// async & await 반복문 테스트 //
var max_number = 10000;
async function a_Syncronous() {
  return new Promise(function(resolve, reject) {
    /*(async function run_aSyncronous() {
      for(var i=100; i<max_number; i=i*2) {
        await foo(i, i);
        await foo(i*2, i*2);
      }
    })()
    */
    resolve(
      (async function run_aSyncronous() {
        for(var i=100; i<max_number; i=i*2) {
          await foo(i, i);
          await foo(i*2, i*2);
        }
      })()

    );
  });// return Promise
}

// async & await 반복문 테스트 결과 //
// a_Syncronous();
// 1. 이 반복문으로 테스트를 해보니 좀 더 확실하게, await의 사용방법을 알게 되었음.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 각 완성된, (async&await)비동기 함수를 다시 동기적으로 실행하는 테스트 //
async function final_Test() {
  await test();
  await console.log("test1");
  await a_Syncronous();
  
}

//final_Test();
// 각 완성된, (async&await)비동기 함수를 다시 동기적으로 실행하는 테스트 결과//
// 실패했다. 반드시, if문을 써야만 하는 것 일끼? 다른 방법은 없는가?
// 제대로, 실행이 안된 걸까? 혹시, await의 한계가 올 떄는, Promise.than()을 사용하면 되지 않을까? 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 각 완성된, (async&await)비동기 함수를 다시 Promise.than()을 활용하여 동기적으로 실행하는 테스트 //
Promise.all([test(), a_Syncronous()]).then((values) => {
  console.log(values);
})
.catch(error => {
  console.log(error.message);
});

// 아무래도 권팀장님꼐서 말씀해주신, forEach(?)밖에는 답이 없을 듯 하다. 아니면, 각 함수를 배열에 넣고 순차실행을 하는 방법 밖에는 없을 것 같다.
