var toyRobot = {
    productId: "123-12",
    name: "Robot",
    price: "25,000",
    madeIn: "Korea",
    quantity: 10,
    showStock: function( ) {
        document.querySelector('#display').innerHTML = this.name + " 제품은 " + this.quantity + "개 남아있습니다.";
    },

    showPrice: function( ) {
        alert("이 제품의 가격은 " + this.price + "원 입니다.");
    }
}

toyRobot.showStock( );
toyRobot.showPrice( );