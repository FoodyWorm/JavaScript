var myVar = 100;
test();
document.write("myVar is " + myVar);

function test() {
	myvar = 10;	
	this.myVar = 50;
	let myVar = 100;
	
}