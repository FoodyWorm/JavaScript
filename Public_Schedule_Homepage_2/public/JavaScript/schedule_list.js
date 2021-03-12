// 이 html 문서가 시작되면, 다음 함수를 실행하라. //
$(document).ready(function() {
  // 이 id가 클릭되면, 다음 함수를 실행하라. //
  $("#schedule_list_btn").click(function() {

  // 스케줄 리스트에 내용을 넣을 수 있도록 참조. //
  var schedule_list = document.querySelector("#schedule_list_content");

    // JSON 파일을 가져와서 그 정보를 사용하는 코드 //
    $.getJSON('../json/list.json', function (data, textStatus) {
      console.log(data);

      // Key를 사용하여 모든, 데이터를 추출하는 코드 //
      $.each(data, function(i, item) {
        var result = item.schedule_Name;
        console.log("Title: " + result);

        // 리스트에 들어갈 노드를 생성하는 코드들 //
        // p_tag
        var p_Tag = document.createElement('p');
        p_Tag.setAttribute("class", "p_Tag");
        
        // CheckBox
        var checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("class", "checkBox");
    
        // form
        var form = document.createElement("form");
        form.setAttribute("class", "delButton");
        form.setAttribute("method", "post");
        form.setAttribute("action", "delete");
        form.setAttribute("target", "no_move");

        // TextNode
        var textNode = document.createElement('input');
        textNode.setAttribute("value", result);
        textNode.setAttribute("type", "text");
        textNode.setAttribute("class", "textNode");
        textNode.setAttribute("name", "List");
        form.appendChild(textNode);

        // DelButton - Content: X
        var x = document.createElement("input");
        x.setAttribute("class", "delButton_X");
        x.setAttribute("type", "submit");
        x.setAttribute("name", "delButton");
        x.setAttribute("value", "X");
        x.appendChild(document.createTextNode(" X "));
        form.appendChild(x);
        
        // underLine
        var underLine = document.createElement("hr");
        underLine.setAttribute("class", "underLine");

        // List 삭제 이벤트 연결
        x.addEventListener("click", function dellist() {
          function deletes() {
            x.parentNode.parentNode.remove();
          };
          setTimeout(deletes, 10);
        });

        // List 체크완료 이벤트 연결
        checkBox.addEventListener("click", function checkList() {
          if(this.checked == true) { this.parentNode.childNodes[1].style.textDecorationLine = "line-through"; }
          else { this.parentNode.childNodes[1].style.textDecorationLine = "none"; }
        });

        // 리스트에 각 노드를 연결하는 코드 //
        p_Tag.appendChild(checkBox);
        p_Tag.appendChild(form);
        p_Tag.appendChild(underLine);

        // 완성된 노드를 스케줄 리스트에 자식 노드로 저장.
        schedule_list.appendChild(p_Tag);
      });

      return false;
    }); // Get.JsonFile
  }); // button.click
}); // document.ready



