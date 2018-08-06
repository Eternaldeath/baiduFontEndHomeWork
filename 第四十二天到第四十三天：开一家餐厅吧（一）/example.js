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
waiter.prototype.waiterWork = function(par){
	if(par.isArray()){
		alert(par);
	}else{
		alert("上菜");
	}
}
	//厨师
function Cook(ID,name,salary){
	memeber.call(this,ID,name,salary);
}

Cook.prototype.cookWork = function(){
	alert("做菜");
}

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

ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);