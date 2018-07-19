		// 加载数据
		window.onload = function(){
			// 创建表格
			buildTable();
			//鼠标滑过创建图表
			var productTrAll = document.querySelectorAll('.showDiv tr');
			var productTdAll = document.querySelector('.showDiv td');
			var showDiv = document.querySelector('.showDiv');

			var save = document.querySelector('#save');
			var clear = document.querySelector("#clear");


			showDiv.onclick = function(e){
				mouse(e);
			}

			// 保存数据
			save.addEventListener('click', function(){
				saveData();
			});

			// 清除数据
			clear.addEventListener('click', function(){
				myclear();
			});
 
				
				
			

			
			// 此处最好用 onclick 事件，因为 onchange 事件第一次无法触发第一个元素选项
			kindSelect.onclick = function(){
				// 每次变更，重设初始值
				var zero = 0;
				var one = 1;
				var goods = 2;
				// 检查是否存在表格，若存在则移除
				removeTable();
				// 检查有哪些选项被点击了
				checkout();
				// 展示出来
				showByArea();
			};

			areaSelect.onclick = function(){
				// 每次变更，重设初始值
				var zero = 0;
				var one = 1;
				var goods = 2;
				// 检查是否存在表格，若存在则移除
				removeTable();
				// 检查有哪些选项被点击了
				checkout();
				// 展示出来
				showByArea();
			};




		}	