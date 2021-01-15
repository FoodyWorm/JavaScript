console.log(document.getElementById("heading").onclick = function() {
   this.style.fontSize = "5em";
});

console.log(document.getElementById("desc"));

console.log(document.getElementsByClassName("accent"));
console.log(document.getElementsByClassName("accent")[0]);
console.log(document.getElementsByClassName("accent")[1]);

console.log(document.getElementsByTagName("h2")[1].style.backgroundColor = "#eee");

console.log(document.getElementsByClassName("accent"));
console.log(document.querySelectorAll(".accent"));

console.log(document.querySelector("#prod-img > img").getAttribute("src"));
console.log(document.querySelector("#prod-img > img").setAttribute("src", "images/coffee-blue.jpg"));
