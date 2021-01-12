var num1 = parseInt(prompt("첫 번째 숫자를 입력해주세요."));
var num2 = parseInt(prompt("두 번째 숫자를 입력해주세요."));
sumMulti(num1, num2);
function sumMulti(a, b) {
    if(a == b) console.log(a*b);
    else console.log(a+b);
}