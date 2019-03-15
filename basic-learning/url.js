var url = "localhost:8080?a=1&c=2&b=3";
var index = url.indexOf("?");
var data = url.slice(index + 1);
var array = data.split("&");
function quickSort(array){
	if(array.length<=1) {
		return array;
	}
	var pivot=array.splice(0,1);
	var left=[];
	var right=[];
	for(var i = 0; i < array.length; i++){
			if(array[i] <= pivot[0]){
					left.push(array[i]);
			}
			else{
					right.push(array[i]);
			}
	}
	return quickSort(left).concat(pivot, quickSort(right));
}                
array = quickSort(array);
var res = [[],[]];
for (var i = 0; i < array.length; i++){
	index = array[i].indexOf("=");
	res[0].push(array[i].substring(0,index));
	res[1].push(array[i].slice(index + 1));
}
var div = document.getElementById("getUrl");
div.innerHTML = `[[${res[0]}],[${res[1]}]]`;
console.log(res);
