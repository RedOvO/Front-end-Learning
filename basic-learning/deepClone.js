/*approach 1
function deepClone(obj) {
	const basicType = [Number, String, Boolean, Function, Date, RegExp];
	let filterType = basicType.filter((type)=> obj instanceof type);
	if (filterType.length > 0) {
		return new filterType[0](obj);
	} else if (obj instanceof Object) {
		var res = Array.isArray(obj) ? new Array() : new Object();
		var array = Object.keys(obj);
		array.forEach(item => {
			res[item] = deepClone(obj[item]);
		});
		return res;
	} else {
		return obj;
	}
}*/

/* approach 2
function deepClone(obj) {
	let filterType = [Number, String, Boolean, Date, RegExp].filter((type) => obj instanceof type);
	if (filterType.length > 0) {
		return new filterType[0](obj);
	} else if (obj instanceof Object && !obj instanceof Function) {
		const newObjEntries = Object.entries(obj).map(entry => [entry[0], deepClone(entry[1])]);
		return Object.fromEntries(newObjEntries);
	} else {
		return obj;
	}
}*/

/* approach 3 */
function deepClone(obj) {
	const basicType = [Number, String, Boolean, Date, RegExp, Function].find(type => obj instanceof type);
	if (obj instanceof Object && !basicType) {
		const newObjEntries = Object.entries(obj).map(entry => [entry[0], deepClone(entry[1])]);
		return newObjEntries.reduce((newObj, current) => (newObj[current[0]] = current[1], newObj), {});
	} else {
		return (obj instanceof Function || !basicType) ? obj : basicType(obj);
	}
}

//test 1
let a = [1, 2, 3];
let b = deepClone(a);
a[0] = 0;
console.log(a, b);

//test 2
let c = {
	a: {
		a1: 1,
		a2: 2
	},
	b: {
		b1: 1,
		b2: 2
	}
};
let d = deepClone(c);
c.a.a1 = 2;
console.log(c, d);

//test 3
let e = [
	{
		a1: 1,
		a2: 2
	},
	{
		b1: 1,
		b2: 2
	}
];
let f = deepClone(e);
e[0].a1 = 2;
console.log(e, f);

//test 4
let g = 1;
let h = deepClone(g);
g = 2;
console.log(g, h);

//test 5
let ii = "abc";
let j = deepClone(i);
ii = "aaa";
console.log(ii, j);

//test 6
let k = true;
let l = deepClone(k);
k = false;
console.log(k, l);

//test 7
let m = null;
let n = deepClone(m);
m = 1;
console.log(m, n);

//test 8
let o = [null, null];
let p = deepClone(o);
o[0] = 1;
console.log(o, p);

//test 9
let q = {
	q1: undefined,
	undefined: 2
}
let r = deepClone(q);
q = 1;
console.log(q, r);

//test 10
let s = {
	s1: () => { },
	s2: () => { }
}
let t = deepClone(s);
console.log(s, t);

//test 11
let u = {
	u1: new Number(1),
	u2: new String("a"),
	u3: new Boolean(true),
	u4: new Date(),
	u5: new RegExp(/./),
}
let v = deepClone(u);
u = {
	u1: new Number(2),
	u2: new String("b"),
	u3: new Boolean(false),
	u4: new Date(),
	u5: new RegExp(/\w/),
}
console.log(u, v);
