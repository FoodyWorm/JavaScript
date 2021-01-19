// Order Information //
var orderName = document.querySelector("#billingName");
var orderTel = document.querySelector("#billingTel");
var orderAddress = document.querySelector("#billingAddr");


// Check Information //
var checkInfo = document.querySelector("#shippingInfo");
console.log(checkInfo);

checkInfo.addEventListener("click", function() {
    console.log("현재 check값은 " + checkInfo.checked);

    if(checkInfo.checked == true) {
        console.log("연동완료");
        document.querySelector("#shippingName").value = orderName.value;
        document.querySelector("#shippingTel").value = orderTel.value;
        document.querySelector("#shippingAddr").value = orderAddress.value;
    }
    else {
        console.log("연동취소");
        document.querySelector("#shippingName").value = "";
        document.querySelector("#shippingTel").value = "";
        document.querySelector("#shippingAddr").value = "";
    }
});

