function Restaurant(money,set,staff,name){
	this.money = money;
	this.set = set;
	this.staff = [];

	this.hire = function(name){
		this.staff.push(name);
	}

	this.fire = function(name){
		this.staff.pop(name);
	}
}

function staffs(ID,name,cash){
	this.ID = ID;
	this.name = name;
	this.cash = cash;
	let work = 0;

	this.finishWork = function(){
		work++;
	}
}

function writer(ID,name,cash){
	this.staffs = staffs;
	this.staffs(ID,name,cash);
}