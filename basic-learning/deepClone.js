function deepClone(obj) {
	if (obj && typeof obj === "object") {
		var res = Array.isArray(obj) ? new Array() : new Object();
		var array = Object.keys(obj);
		array.forEach(item => {
			res[item] = deepClone(obj[item]);
		});
		return res;
	} else {
		return obj;
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
let i = "abc";
let j = deepClone(i);
i = "aaa";
console.log(i, j);

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
let q = undefined;
let r = deepClone(q);
q = 1;
console.log(q, r);