var tovar1 = []
let money,
	name,
	time,
	prise

function start() {
	if (isNaN(money) || money == ' ' || money == null){
		money = prompt("budget?")
	} else {
		alert("Rewrite your budget!");
	};
	
	name = prompt("name of shop?").toUpperCase();
	time = 10
}

start();


var mainList = {
	budget : money,
	shopname : name,
	shopName : [],
	employers : {},
	open : false,
	discount : false,
}

function chooseGoods {
	for (let i = 0; i < 3; i++){
		var a = prompt("What do you want sale?");
		if ((typeof(a))  === 'string' && (typeof(a)) != null && a.length < 50 && !=  ' ' ){
			mainList.shopGoods[i] = a;
			tovar1[i] = a;
		} else {
			i = i - 1;
			alert("Rewrite your sales!")
		};
	};
};