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
        var p_Tag = Dom.createElement('p');
        p_Tag.setAttribute("class", "p_Tag");
        
        // CheckBox
        var checkBox = Dom.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("class", "checkBox");
        
        // TextNode
        var textNode = document.createElement('span');
        textNode.appendChild(document.createTextNode(result));
         
        // DelButton
        var delButton = Dom.createElement("span");
        delButton.appendChild(Dom.createTextNode(" X "));
        delButton.setAttribute("class", "delButton");

        // underLine
        var underLine = Dom.createElement("hr");

        // 리스트에 각 노드를 연결하는 코드 //
       









        // 완성된 노드를 스케줄 리스트에 자식 노드로 저장.
        schedule_list.appendChild(p_Tag);
      });// 
    








      return false;
    }); // Get.JsonFile
  })  // button.click
}) // document.ready



