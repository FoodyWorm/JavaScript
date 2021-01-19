// Radius //
var radius = document.querySelector("#radius");
radius.setAttribute("placeholder", "숫자만 입력");

// Round //
var round = document.querySelector("#round");

// Area //
var area = document.querySelector("#area");

// Radius Button //
var radiusBtn = document.querySelector("#start");
radiusBtn.addEventListener("click", function(){
  
      // Number Check //
      if(typeof(Number(radius.value)) != typeof(0)) {
          alert("숫자만 입력해주세요.");
          radius.value = "";
          radius.focus();

      }
      // Calculation //
      else{
          round.value = 2 * Math.PI * radius.value;
          area.value = Math.PI * (radius.value * radius.value)

      }
      
});

