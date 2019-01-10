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

var num = 10.005;
console.log(num.toFixed(2));
console.log(Math.random());