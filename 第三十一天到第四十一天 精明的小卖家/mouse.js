
function mouse(e){
	// 获取td
	var tdd = e.target;
	// 通过定位 td 反向获取tr
	var trr = e.target.parentNode;
	var trrChild = trr.children;
	// 设置需要传输的数组
	var temp = [];
	// 把字符串转换成数字
	var num;
	
	if(tdd.tagName == 'TD'){
		for(var i=2;i<trrChild.length;i++){
			// console.log(trrChild[i].textContent);
			num = parseInt(trrChild[i].textContent);
			temp.push(num);
			drawLinePic(temp);
		}		
	}


}