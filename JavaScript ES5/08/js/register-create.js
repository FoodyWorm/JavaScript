// 신청버튼이 눌리면 newRegister() 함수 실행.
document.querySelector("#send").addEventListener("click", newRegister);

// 참가자 신청 저장 및 삭제.
function newRegister() {					
		var userName = document.querySelector("#userName"); // text태그 가져오기
		if(userName.value == "") {
			alert("이름을 입력해주세요.");

		}
		else {
			// 신청 저장 //
			var newP = document.createElement("p");  // p태그 생성 후 저장.
			newP.appendChild(document.createTextNode(userName.value));  // 이름을 textNode로 저장.

			var delButton = document.createElement("span"); // span태그 생성 후 저장.
			delButton.appendChild(document.createTextNode("X")); // delButton 값.
			delButton.setAttribute("class", "del"); // delButton 속성값.
			delButton.addEventListener("click", delRegister); // delButton에 클릭 이벤트 생성.
			
			newP.appendChild(delButton); // 이름과 함께 delButton도 추가.

			var nameList = document.querySelector("#nameList");  // div태그 가져오기
			nameList.insertBefore(newP, nameList.childNodes[0]); // 신청리스트에 이름 저장.

			// 신청 삭제 //
			function delRegister() {
					console.log(newP);
					newP.removeChild(this);

			} // 노드 개빡세넹.. ㅡㅡ

			userName.value = "";  // 텍스트 필드 초기화.
		}
		return false;
}			