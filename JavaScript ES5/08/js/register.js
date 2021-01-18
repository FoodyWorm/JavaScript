function newRegister() {
    var userName = document.querySelector("#userName").value; // 입력 값을 저장.
    if(userName == ""){
        alert("이름을 입력해주세요.");
    }
    else{
        var newElement = document.createElement("p"); // 태그(요소) 생성.
        var delButton = document.createElement("span"); // 태그(요소) 생성.

        delButton.setAttribute("class", "del"); // 삭제 속성 적용.
        delButton.appendChild(document.createTextNode("X")); // X값 텍스트 노드 저장.
        delButton.addEventListener("click", delRegister); // 클릭 이벤트도 함께 저장.

        newElement.appendChild(document.createTextNode(userName)); // 태그(요소)에 입력 값을 텍스트 노드로 변환하여 기입.
        newElement.appendChild(delButton); // 태그(요소)에 삭제 버튼을 기입.

        document.querySelector("#nameList").appendChild(newElement); // 완성된 태그를 nameList에 저장.
        document.querySelector("#userName").value = ""; // 입력 값을 초기화.

        // newP 노드를 nameList 노드의 맨 앞에 추가하는 소스
        var nameList = document.querySelector("#nameList");
        nameList.insertBefore(newElement, nameList.children[0]);

        // 또 다른 방법 // 
        // nameList.insertBefore(newElement, nameList.querySelectorAll("p")[0]); //
    }
     
    
}

function delRegister() {
    var allList = document.querySelector("#nameList").querySelectorAll("p"); // nameList에 p요소를 다 가져와 저장.
    console.log(allList);

    for(var i=0; i<allList.length; i++) { // 배열 갯수만큼 반복.
        allList[i].addEventListener("click", function(){ // 반복하다 그것이 눌리면
            console.log(this);
            console.log(this.parentNode);
            this.parentNode.removeChild(this); // 부모자신과 자식노드를 함께 삭제해라.

        });
    }
}




