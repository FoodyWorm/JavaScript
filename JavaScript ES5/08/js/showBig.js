var bigPic = document.querySelector("#prod-pic > img"); // 자식 선택자로 img 요소를 가져옴.
var smallPic = document.querySelectorAll(".small"); // 클래스 .small에 관련된 모든 요소를 배열로 저장.

for(var i=0; i<smallPic.length; i++) smallPic[i].addEventListener("click", setPic); // 각 배열이 클릭되는지 반복문으로 상시 체크.
function setPic() { bigPic.setAttribute("src", this.src); } // 클릭되면 실행되는 함수. setAttribute로 bicPic의 src속성에 smallPic의 src속성을 저장. 


