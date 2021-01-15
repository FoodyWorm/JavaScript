    var pic = document.querySelector('#pic');
    var page = document;
    pic.addEventListener("mousedown", changePicBoy, false);
    pic.addEventListener("mouseup", changePicGirl, false);
    page.addEventListener("mousedown", pageClick);
    function changePicBoy() { pic.src = "images/boy.png"; }
    function changePicGirl() { pic.src = "images/girl.png"; }
    function drawBorder() { pic.style.border = "2px dotted #666"; }
    function pageClick() { alert("안녕하세요?"); }

    // test
    var test1 = document.getElementById("test");
    console.log(test1.textContent);

    var test2 = document.querySelector("#test");
    console.log(test2.textContent)