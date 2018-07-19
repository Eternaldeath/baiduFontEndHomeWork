
var tdAllForLocal = document.querySelectorAll('td');

function saveData(){

	for(var i=0;i<tdAllForLocal.length;i++){
		var msg = tdAllForLocal[i].textContent;
		localStorage.setItem("msg"+i, msg);
		alert(tdAllForLocal.length);
	}	
	alert("保存成功");
}

function myclear(){
	localStorage.clear();
	alert("清除成功");
}