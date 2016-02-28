function newNumber(a) {
		generalWindow.value = generalWindow.value + a.value;
		};
		function newAction(b) {
		sub1 = +generalWindow.value;
		sign = b.value; 
		generalWindow.value = "";
		};
		
	var generalWindow = document.getElementById("inp");
	var butNum = document.getElementsByName("num");		
	for (var i=0; i<butNum.length;i++){
		butNum[i].setAttribute("onclick", "newNumber(this)"); 
	}
	
	var butAct = document.getElementsByName("action");
	for (var j=0; j<butAct.length;j++){
		butAct[j].setAttribute("onclick", "newAction(this)"); 
	}
	
	var butRes = document.getElementById("butReset");
		butRes.onclick = function() {generalWindow.value = butRes.value;};
		
	var sub1;
	var sub2;
	var butDo = document.getElementById("equaly");
		butDo.onclick = function() {
			sub2 = +generalWindow.value;
			var m;
		  if(sub2==0 && sign=="/"){alert("ощибка! деление на ноль")}
		   else{
			switch(sign){
				case 'plus':  m = sub1 + sub2;break;
				case 'min':  m = sub1 - sub2;break;
				case '*':  m = sub1 * sub2;break;
				case '/':  m = sub1 / sub2;break;
				case 'oposit': m = sub1 * (-1);break;
			}
		
			generalWindow.value = m;
			sub1 = 0;
			sub2 = 0;
			sign = "";
		   }
		};

	  