//获取变量
		var areaSelect = document.querySelector('.areaSelect');
		var kindSelect = document.querySelector('.kindSelect');
		var monthSelect = document.querySelector('.monthSelect');

		var areaSelectInput = document.querySelectorAll('.areaSelectInput');
		var kindSelectInput = document.querySelectorAll('.kindSelectInput');
		var monthSelectInput = document.querySelectorAll('.monthSelectInput');
		var showDiv = document.querySelector('.showDiv');
		var tdData = document.querySelectorAll('td');
		var monthAndOther = ['商品','地区','一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
		// 创建表格变量
		var table = document.createElement('table');
		// 创建一个空数组用来盛放被点击项内容--地区
		var arrayCheck = [];
		// 创建一个空数组用来盛放被点击项内容--产品
		var arrayChecksecond = [];

// -----------------------分割线一下是通用）-----------------------------------------------
		//根据地区展示图表
		function showByArea(){
			var zero = 0;
			var one = 1;
			var goods = 2;
			for(var i=0;i<9;i++){
				for(var j=0;j<arrayCheck.length;j++){
					// 如果是地区先被选择
					if(sourceData[i].region == arrayCheck[j]){
						for(var z=0;z<arrayChecksecond.length;z++){
							// 检查产品被选择
							if(sourceData[i].product == arrayChecksecond[z]){
								buildTableTr(i,zero,one,goods);
								zero += 14;
								one += 14;
								goods += 14;							
							}						
						}
					}					
					}
				}
			}
	

		// 创建表格和表头
		function buildTable(){
			var tr = document.createElement('tr');  
			var index = 0;
			showDiv.appendChild(table);
			// 设置单元格空白间距为 0
			table.cellSpacing = '0';
			table.appendChild(tr);
			// 产生14个 th
			for(var i=0;i<14;i++){
				var th = document.createElement('th');
				tr.appendChild(th);
			}
			// 装填14个 th
			var thAll = document.querySelectorAll('th');
			for(var i=0;i<monthAndOther.length;i++){
				thAll[i].innerHTML = monthAndOther[index];
				index++;
			}
		}

		// 移除单内容
		function removeTable(){
			var table = document.querySelector('table');
			var trAll = document.querySelectorAll('tr');
			var tr = document.querySelector('tr');
			if(table.contains(tr)){
				for(var i=1;i<trAll.length;i++){
					table.removeChild(trAll[i]);
				}
			}; 
		}


		// 检查有哪些选项被点击
		function checkout(){
			// 每次都将 array 置空
			arrayCheck = [];
			arrayChecksecond = [];

			for(var i=0;i<3;i++){
				if(areaSelectInput[i].checked){
					arrayCheck.push(areaSelectInput[i].value);	
				}
			}

			for(var i=0;i<3;i++){
				if(kindSelectInput[i].checked){
					arrayChecksecond.push(kindSelectInput[i].value);
					
				}
			}
		}
// ----------------------------分割线一下 表单内容创建是属于地区选择的--------------------

		// 创建表单内容 -- 部分
		function buildTableTr(i,zero,one,goods){
			var tr = document.createElement('tr');			
			table.appendChild(tr);
			for(var j=0;j<14;j++){
				var td = document.createElement('td');	
				tr.appendChild(td);
			}
			var tdAll = document.querySelectorAll('td');
			// 插入静态数据
			// 	先获取前两个非数组内容
				tdAll[zero].innerHTML = sourceData[i].product; 
				tdAll[one].innerHTML = sourceData[i].region; 
			for(var x=0;x<12;x++){
				tdAll[goods].innerHTML = sourceData[i].sale[x];
				goods++;
			}		
		}

		// 创建表单内容 -- 全部
		// function bildTableTrAll(i,zero,one,goods){
		// 	var tr = document.createElement('tr');			
		// 	table.appendChild(tr);
		// 	for(var j=0;j<14;j++){
		// 		var td = document.createElement('td');	
		// 		tr.appendChild(td);
		// 	}
		// 	var tdAll = document.querySelectorAll('td');
		// 	// 插入静态数据
		// 	// 	先获取前两个非数组内容
		// 		tdAll[zero].innerHTML = sourceData[i].product; 
		// 		tdAll[one].innerHTML = sourceData[i].region; 
		// 	for(var x=0;x<12;x++){
		// 		tdAll[goods].innerHTML = sourceData[i].sale[x];
		// 		goods++;
		// 	}
		// }
// -----------------------------分割线一下 表单内容创建是属于商品种类选择的--------

// -----------------------------分隔线以下是初始化----------------------------
