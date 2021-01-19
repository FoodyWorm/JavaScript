// Price //
var mainPrice = 24000;
var subPrice = 0;
var checkList = document.querySelectorAll(".checkbx");
for(var i=0; i<checkList.length; i++){
    checkList[i].addEventListener("click", function() {
        if(this.checked == true){
           subPrice += Number(this.value);
          
        }
        else{
          subPrice -= Number(this.value);
        
        }
    // Total //
    var total =  mainPrice + subPrice;
    document.querySelector("#total").value = total;

    });
}




