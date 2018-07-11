var canvasRect = document.querySelector('#canvasRect');
var canvasLine = document.querySelector('#canvasLine');
var canvasCircle = document.querySelector('#canvasCircle');
var canvasCurve = document.querySelector('#canvasQuadraticCurve');
var canvasOtherRect = document.querySelector('#canvasOtherRect');
var path2d = document.querySelector('#path2d');
var mycolor = document.querySelector('#color');
var LinearGradient = document.querySelector('#LinearGradient');
var shadowWord = document.querySelector('#shadowWord');
var clock = document.querySelector('#clock');
var cloud = document.querySelector('#cloud');


var ctx_rect = canvasRect.getContext('2d');
var ctx_line = canvasLine.getContext('2d');
var ctx_circle = canvasCircle.getContext('2d');
var ctx_Curve = canvasCurve.getContext('2d');
var ctx_otherrect = canvasOtherRect.getContext('2d');
var ctx_path2d = path2d.getContext('2d');
var ctx_color = mycolor.getContext('2d');
var ctx_LinearGradient = LinearGradient.getContext('2d');
var ctx_shadowWord = shadowWord.getContext('2d');
var ctx_clock = clock.getContext('2d');
var ctx_cloud = cloud.getContext('2d');


var myRect = new Path2D();
var myCircle = new Path2D();

function drawRect(){
	ctx_rect.fillRect(50,50,50,50);
}

function drawLine(){
	ctx_line.beginPath();
	ctx_line.moveTo(0,0);
	ctx_line.lineTo(1000,1100);
	ctx_line.closePath();
	ctx_line.stroke();
}

function drawcircle(){
	ctx_circle.beginPath();
	ctx_circle.arc(50,50,20,0,Math.PI*2,true);
	ctx_circle.closePath();
	ctx_circle.stroke();
}

function drawctxCurve(){
	ctx_Curve.beginPath();
	ctx_Curve.moveTo(50,50);
	ctx_Curve.quadraticCurveTo(25,25,25,62.5);
	ctx_Curve.quadraticCurveTo(25,100,50,100);
	ctx_Curve.quadraticCurveTo(25,25,25,62.5);
	ctx_Curve.quadraticCurveTo(50,120,30,125);
	ctx_Curve.quadraticCurveTo(60,120,65,100);
	ctx_Curve.quadraticCurveTo(125,100,125,62.5);
	ctx_Curve.quadraticCurveTo(125,25,75,25);
	ctx_Curve.stroke();
}

function drawOtherRect(){
	ctx_otherrect.rect(0,0,50,50);
	ctx_otherrect.stroke();
}

function drawpath2d(){
	myRect.rect(10,10,50,50);
	myCircle.moveTo(50,50);
	myCircle.arc(50,50,20,0,Math.PI*2);
	ctx_path2d.stroke(myRect);
	ctx_path2d.fill(myCircle);
}

function colorfulRect(){
	for (var i=0;i<6;i++){
		for (var j=0;j<6;j++){
			ctx_color.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + 
			Math.floor(255-42.5*j) + ',0)';
			ctx_color.fillRect(j*25,i*25,25,25);
		}
	}	

}

function createMyLinearGradient(){
	var temp = ctx_LinearGradient.createLinearGradient(0,0,150,150);
	temp.addColorStop(0,'#ff00ff');
	temp.addColorStop(0.4,'#ff11ff');
	temp.addColorStop(1,'#ff323f');

	ctx_LinearGradient.fillStyle = temp;
	ctx_LinearGradient.fillRect(0,0,300,150);
}

function drawshadowWord(){
	ctx_shadowWord.shadowOffsetX = 2;
	ctx_shadowWord.shadowOffsetY = 2;
	ctx_shadowWord.shadowBlur = 2;
	ctx_shadowWord.shadowColor = "rgb(1,1,0)";
	ctx_shadowWord.fillStyle = 'red';
	ctx_shadowWord.fillText("模糊文字", 10, 10);
	ctx_shadowWord.strokeText("边框文字",20,20);
	ctx_shadowWord.font = "50px sans-serif";

}

function drawClock(){
	ctx_clock.beginPath();
	ctx_clock.arc(100,100,40,0,Math.PI*2,true);
	ctx_clock.moveTo(100,100);
	ctx_clock.arc(100,100,2,0,0,true);

	ctx_clock.moveTo(60,100);
	ctx_clock.lineTo(65,100);

	ctx_clock.moveTo(100,60);
	ctx_clock.lineTo(100,65);

	ctx_clock.moveTo(140,100);
	ctx_clock.lineTo(135,100);

	ctx_clock.moveTo(100,140);
	ctx_clock.lineTo(100,135);

	ctx_clock.moveTo(100,100);
	ctx_clock.lineTo(120,100);

	ctx_clock.moveTo(100,100);
	ctx_clock.lineTo(100,70);

	ctx_clock.closePath();
	ctx_clock.stroke();
}

function drawCloud(){
	 ctx_cloud.beginPath();
	 ctx_cloud.moveTo(75,25);
	 ctx_cloud.quadraticCurveTo(25,25,25,62.5);
	 ctx_cloud.quadraticCurveTo(10,100,30,120);
	 ctx_cloud.quadraticCurveTo(60,130,70,110);
	 ctx_cloud.quadraticCurveTo(110,110,120,60);
	 ctx_cloud.quadraticCurveTo(45,125,110,25);
	 ctx_cloud.quadraticCurveTo(125,25,75,25);
	 ctx_cloud.stroke();	
}


drawRect();
drawLine();
drawcircle();
drawctxCurve();
drawOtherRect();
drawpath2d();
colorfulRect();
createMyLinearGradient();
drawshadowWord();
drawClock();
drawCloud();