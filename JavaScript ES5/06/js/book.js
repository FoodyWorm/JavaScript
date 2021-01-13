function Book(title, author, pages, price) {
  
    this.title = title;     //제목
    this.author = author;   //작성자   
    this.pages = pages;     //분량
    this.price = price;     //가격

}

var javaScript = new Book("JavaScript", "Jangenkim", 350, 25200);
var html = new Book("HTML", "hork", 200, 10000);
var css = new Book("CSS", "CaseToho", 300, 15000);
var bookList = [javaScript, html, css];

document.write("<h1>책 제목으로 살펴보기</h1>");
for(var i = 0; i < bookList.length; i++) {

    document.write("<p>" + bookList[i].price + "</p>");
}