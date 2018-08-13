

// 餐厅类
function restaurant(cash,seats,staff){
	this.cash = cash;
	this.seats = seats;
	this.staff = [];
}

restaurant.prototype.hire = function(people){
	this.staff.push(people.name);
}

restaurant.prototype.fire = function(people){
	var staffName = this.staff.indexOf(people.name);
	if(staffName > -1){
		this.staff.splice(staffName,1);
	}
}

//职员类
function memeber(ID,name,salary){
	this.ID = ID;
	this.name = name;
	this.salary = salary;
}

memeber.prototype.work = function(){
	alert("我工作了一次")
}

function waiter(ID,name,salary){
	memeber.call(this,ID,name,salary);
}
	//服务员
var waiter = function(ID,name,salary) {
    memeber.call(this,ID, name,salary);

};

waiter.prototype.waiterWork = function(par){
	if(par.isArray()){
		alert(par);
	}else{
		alert("上菜");
	}
}

waiter.getInstance = (function(ID,name,salary) {
    var instance;
    return function(ID,name,salary){
        if (!instance) {
            instance = new waiter(ID,name,salary);
        }
    }
})();


	//厨师
var Cook = function(ID,name,salary){
	memeber.call(this,ID,name,salary);
}

Cook.prototype.cookWork = function(){
	alert("做菜");
}

Cook.getInstance = (function(ID,name,salary){
	var instance;
	return function(ID,name,salary){
		if(!instance){
			instance = new Cook(ID,name,salary);
		}
	}
})();

//顾客
function customer(){

}

customer.prototype.order = function(){
	alert("点菜");
}

customer.prototype.eat = function(){
	alert("吃菜");
}

//菜品
function food(foodName,cost,price){
	this.foodName = foodName;
	this.cost = cost;
	this.price = price;
}

//测试用例
var ifeRestaurant = new restaurant({
    cash: 1000000,
    seats: 20,
    staff: []
});

var newCook = new Cook(1,"Tony", 10000);
ifeRestaurant.hire(newCook);
console.log(ifeRestaurant.staff);


//这是一个顾客的队列
var customers =  new Array('夏丽','黎明','倩倩');

//菜单
var menu = {
	name:['水煮鱼','蔬菜撒拉','炒饭'],
	price:['11元','12元','13元']
}

//点菜
var orderMenu = function(){
	var number = Math.ceil(Math.random()*2); 
	console.log('顾客点了' + menu.name[number] + ' 价格是' + menu.price[number]);

	return menu.name[number];
}



//一个启动程序
var init = function(){
	console.log('------餐馆即将开始运作-----');
	for(var i=0;i<3;i++){
		console.log(customers[i] + '进入了餐馆');
		
		var menuName = orderMenu();
		console.log('服务员告诉厨师顾客点了' + menuName);
		console.log('厨师正在做菜');
		// for(var j=5;j>0;j--){
		// 	console.log('倒计时 ' + j);
		// }
		console.log('服务员上菜');
		console.log('顾客开始吃菜');
		// for(var z=3;z>0;z++){
		// 	console.log('倒计时 ' + z);
		// }
		console.log('顾客离开，下一位顾客即将进入');
	}

	console.log('今天餐馆营业完毕');
}

//执行营业函数
init();