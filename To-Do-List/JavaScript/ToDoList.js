// Add_Button 클릭 이벤트 //
document.querySelector("#Add_Button").addEventListener("click", function(){
    // List노드 생성
    var list = document.createElement("li");
    list.setAttribute("class", "ToDo");
    
    // Text노드 생성
    var getText = document.querySelector("#Add_Text").value;
    var textNode = document.createElement("span");
    textNode.appendChild(document.createTextNode(getText));
    textNode.setAttribute("class", "textNode");
    
    // CheckBox노드 생성
    var checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "checkBox");

    // DelButton노드 생성
    var delButton = document.createElement("button");
    delButton.setAttribute("class", "delButton");

    // 밑줄노드 생성
    var underLine = document.createElement("hr");

    // 노드연결
    list.appendChild(checkBox);
    list.appendChild(textNode);
    list.appendChild(delButton);
    list.appendChild(underLine);
   

// List 추가 이벤트 //
    // List 추가 조건
    if(getText.length != 0) {
        // List에 추가 및 값 초기화
        document.querySelector("#List").appendChild(list);
        document.querySelector("#Add_Text").value = "";
        document.querySelector("#Add_Text").focus();

        // List 삭제 이벤트 연결
        delButton.addEventListener("click", delList);

        // List 체크완료 이벤트 연결
        checkBox.addEventListener("click", checkList);

    }    
    else
        alert("옳바른 데이터 값을 입력해주세요.");
    
});


// List 삭제 이벤트 //
function delList() { this.parentNode.remove(); } 


// List 체크완료 이벤트 //
function checkList() {
    if(this.checked == true) { this.parentNode.childNodes[1].style.textDecorationLine = "line-through"; }
    else { this.parentNode.childNodes[1].style.textDecorationLine = "none"; }
    
}










