
// ID
var userId = document.querySelector("#user-id");
userId.onchange = checkId;

function checkId() {
    if (userId.value.length < 4 || userId.value.length > 15){
      alert("4~15자리의 영문과 숫자를 사용하세요.");
      userId.value = "";
      userId.focus();

    }
}

// PW
var userPw1 = document.querySelector("#user-pw1");
var userPw2 = document.querySelector("#user-pw2");
userPw1.onchange = checkPw1;
userPw2.onchange = checkPw2;

function checkPw1(){
    if(userPw1.value.length < 8) {
        alert("비밀번호는 8자 이상을 입력해주세요.");
        userPw1.value = "";  
        userPw1.focus();
      }
    
}

function checkPw2(){
    if(userPw2.value != userPw1.value) {
        alert("비밀번호가 일치하지 않습니다.");
        userPw2.value = "";
        userPw2.focus();
    }

}

