new 的过程
1.创建一个空对象{}
2.new function(){} 函数运行时,会产生几个必有的对象，并且是动态决定的
this   this=>{}
function不是以new的方式来运行时,就是一个普通函数,this指向window.
启动严格模式 'use strict',this就是undefined
arguments

Person.prototype是Person的原型对象

Person.prototype.constructor原型对象的构造函数 == Person

js中没有类 Person 对象（函数）
woniu.__proto__ === Person.prototype
this 当作为对象的方法被执行时 this指向对象 woniu.sing();
new Person this指向实例
Person()以普通函数运行时,this指向window | undefined(use strict下)

3.面向对象的做法,三种
constructor + prototype 基于原型
es6 class 关键字
Object.create(原型对象)

Object.create()
function create(obj){
    function F(){};  //空函数
    F.prototype = obj;
    return new F();
}