const compare = (obj1, obj2) => {
	var type1 = typeof obj1;
	var type2 = typeof obj2;
	if (type1 !== type2) {
			return false;
	} else if (type1 === "object") {
			var array1 = Object.keys(obj1);
			var array2 = Object.keys(obj2);
			if(array1.length !== array2.length){
					return false;
			}
			for(var i = 0; i < array1.length; i++){
					if(obj1.array1[i] !== obj2.array2[i]) {
							return false;
					}
			}
			return true;
	} else {
			return obj1 === obj2;
	}
}


// For Test
const cases = [];
// case1 
cases.push([
	{},
	{},
]);
// case2
cases.push([
	[],
	[],
]);
// case3
cases.push([
	123,
	'123',
]);
cases.forEach((case_current, i) => {
	console.log('Case', i + 1, compare(...case_current))
});