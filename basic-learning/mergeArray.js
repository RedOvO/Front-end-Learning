let array1 = [1, 2, 3];
let array2 = [1, 2, 4];
let array3 = [
	{
		a: 1
	}, {
		b: 2
	}
];
let array4 = [
	{
		a: 1
	}, {
		b: 3
	}
];
//合并简单类型数组的两种方法
function mergeArray1(array1, array2) {
	return array1.concat(array2.filter((item) => !array1.includes(item)));
}
res1 = mergeArray1(array1, array2);
console.log(res1);
console.log([...new Set(array1.concat(array2))]);

//合并所有类型数据的两种方法
const compare = (obj1, obj2) => {
	var type1 = typeof obj1;
	var type2 = typeof obj2;
	if (type1 !== type2) {
		return false;
	} else if (type1 === "object") {
		var array1 = Object.keys(obj1);
		var array2 = Object.keys(obj2);
		if (array1.length !== array2.length) {
			return false;
		}
		return array1.every((item) => {
			return obj1[item] === obj2[item];
		})
	} else {
		return obj1 === obj2;
	}
}
function mergeArray2(array1, array2) {
	return array1.concat(array2.filter((item1) => array1.some((item2) => compare(item1, item2))));
}
res2 = mergeArray2(array3, array4);
console.log(res2);
