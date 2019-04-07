function repalcer(key, value) {
	if(typeof value === "undefined"){
		return undefined;
	} else if(typeof value === "function"){
		return "aaa";
	}
}

//test 1
let a = [1, 2, 3];
a = JSON.parse(JSON.stringify(a, repalcer));
console.log(a);

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
c = JSON.parse(JSON.stringify(c, repalcer));
console.log(c);

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
e = JSON.parse(JSON.stringify(e, repalcer));
console.log(e);

//test 4
let g = 1;
g = JSON.parse(JSON.stringify(g, repalcer));
console.log(g);

//test 5
let i = "abc";
i = JSON.parse(JSON.stringify(i, repalcer));
console.log(i);

//test 6
let k = true;
k = JSON.parse(JSON.stringify(k, repalcer));
console.log(k);

//test 7
let m = null;
m = JSON.parse(JSON.stringify(m, repalcer));
console.log(m);

//test 8
let o = [null, null];
o = JSON.parse(JSON.stringify(o, repalcer));
console.log(o);

//test 9
let s = {
	s1: ()=>{},
	s2: ()=>{}
}
s = JSON.parse(JSON.stringify(s));
console.log(s);

//test 10
let q = {
	undefined: 1,
	q1: undefined
};
q = JSON.parse(JSON.stringify(q));
console.log(q);

