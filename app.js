// var text = 'hello world';
// document.write('<p>' + text + '</p>');
// console.log(text);
// var author = {
//     name: 'john',
//     age: 23
// }
// var x = 3, y, z;
// y = x++;
// z = ++x;
// console.log(y + "&" + z);
// function test(num){
//     num = num || 100;
//     console.log(num);
// }
// test(20);
// test()

var obj = {
    name: 'john',
    say: function (content) {
        console.log(this);
        var say = function () {
            console.log(this.name + ' say ' + content);
        };
        say.call(this);
    }
};
obj.say('welcome');

var phone = {};
        console.log(phone.toString());

var num = 10.005;
console.log(num.toFixed(2));
console.log(Math.random());

var obj = {
    0:1,
    1:6,
    2:3,
    length:3,
};
var array = Array.from(obj);
console.log(array);

var date1 = new Date(2016, 11, 11, 11, 11 ,11);
console.log(date1);
var date2 = new Date(2016, 12, 11, 11, 11 ,11);
console.log(date2)
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
var time = date.getTime();
var week = date.getDay();
console.log(year, month, day, hour, minute, second, time, week);
console.log(format(date));