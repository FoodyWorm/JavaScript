var check = document.querySelector("#shippingInfo");

check.addEventListener("click", function( ){
    if(check.checked == true){
        document.querySelector("#shippingName").value = document.querySelector("#billingName").value;
        document.querySelector("#shippingTel").value = document.querySelector("#billingTel").value;
        document.querySelector("#shippingAddr").value = document.querySelector("#billingAddr").value;

    }
    else{
      document.querySelector("#shippingName").value = "";
      document.querySelector("#shippingTel").value = "";
      document.querySelector("#shippingAddr").value = "";

    }

});


