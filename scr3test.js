var qw = document.querySelectorAll("input[name^='qw']");
var subm = document.getElementById("rez");
var qw4 = document.querySelectorAll("input[name='qw4']");
var qw5 = document.querySelectorAll("input[name='qw5']");

subm.onclick = function(){
	var n = 0;
	var count=0;
	
	for (var i=0;i<qw.length;i++){	
		if((qw[i].checked==true) && (qw[i].value!=0)){count += +qw[i].value; n++;};
	}
	
	if ((qw4[0].checked==true && qw4[1].checked==true && qw4[2].checked==true && qw4[3].checked==true) || (qw5[0].checked==true && qw5[1].checked==true && qw5[2].checked==true && qw5[3].checked==true)){
		alert ("нельзя выбирать все варианты!");
	}
		else{
			alert ("количество набранных баллов: "+count + " из 50 возможных");
			alert("правильных ответов: " + (+n/7*100).toFixed(0) + "%");
		}
}
