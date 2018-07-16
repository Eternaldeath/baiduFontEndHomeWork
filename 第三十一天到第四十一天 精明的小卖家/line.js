function drawLinePic(temp){
	var canvasLine = document.querySelector('#canvasLine');
	var ctx_line = canvasLine.getContext('2d');
	var ctx_line2 = canvasLine.getContext('2d');
	var data_area = [];
	data_area = data_area.concat(temp);
	// 设置数据点间隔
	var gap = 20;

	// 设置画布的轴线
	ctx_line.beginPath();
	ctx_line.moveTo(10,10);
	ctx_line.lineTo(10,140);
	ctx_line.moveTo(10,140);
	ctx_line.lineTo(280,140);	
	ctx_line.closePath();
	ctx_line.stroke();




	
	// 绘制数据点
	for(var i=0;i<data_area.length;i++){	
		ctx_line2.beginPath();
		ctx_line2.moveTo(gap,140-data_area[i]*0.2);			
		ctx_line2.lineTo(gap+22,140-data_area[i+1]*0.2);
		ctx_line2.arc(gap,140-data_area[i]*0.2,2,0,Math.PI*2);
		gap += 22;
		ctx_line2.stroke();
	}
	

// 'rgb(0,' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * (i+1)) + ')'
}


