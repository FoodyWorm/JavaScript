// Get UserInformation //
var userId = document.querySelector("#user-id");
var userPw = document.querySelector("#user-pw1");
var userPwCheck = document.querySelector("#user-pw2");
console.log(userId, userPw, userPwCheck);


// Check User Id //
function checkId(){
    console.log("연결확인");
    console.log("userId의 입력값의 길이는 " + userId.value.length);

    if(userId.value.length < 4 || userId.value.length > 15) {
        alert("4자 이상 ~ 15자 이하로 작성해주세요.");
        userId.value = "";
        userId.focus();

    }
}

// Check User Pw //
function checkPw(){
    console.log("연결확인");
    console.log("userPw의 값은 " + userPw.value);

    if(userPw.value.length < 8) {
        alert("8자 이상을 입력해주세요.");
        userPw.value = "";
        userPw.value.focus();

    }
}

// Double Check User Pw //
function comparePw(){
  console.log("연결확인");
  console.log("userPw의 값은 " + userPwCheck.value);

  if(userPw.value != userPwCheck.value) {
      alert("비밀번호가 일치하지 않습니다.");
      userPwCheck.value = "";
      userPwCheck.focus();
      
  }
}