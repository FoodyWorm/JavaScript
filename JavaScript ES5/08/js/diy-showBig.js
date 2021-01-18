// 사진을 불러와 각 변수에 저장합니다.
var bigPic = document.querySelector("#cup"); 
var smallPic = document.querySelectorAll(".small");

// 작은 사진이 클릭되면 함수를 실행시킵니다.
for(var i=0; i<smallPic.length; i++) { 
    smallPic[i].addEventListener("click", function(){

      // 큰 이미지에 작은 이미지를 저장합니다.
      bigPic.setAttribute("src", this.src);

    });
}
