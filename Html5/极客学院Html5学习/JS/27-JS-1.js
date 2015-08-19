/**
 * Created by kingsweet on 15/8/10.
 */

//创建类
function Person () {
    var _this = {};
    _this.sayHello = function () {
        document.write("<br/>Person sayHello");
    }
    return _this;
}

//继承类
function Teacher () {
    var _this = Person();
    var superClass = Person();
    _this.sayHello = function () {//重写方法
        superClass.sayHello();
        document.write("<br/>Teacher sayHello");
    }
    return _this;
}

var t = Teacher();
t.sayHello();





















/*面向对象*/
/*
var person = {
    name: "KingSweet",
    age: 28,
    eat: function () {
        alert("person eat!");
    }
}
//person.eat();


function Person2 () {

}
Person2.prototype = {
    name: "KingSweet",
    age: 30,
    eat: function () {
        alert("Person2 eat");
    }
}



*/
/*模拟类*//*

function People () {

}
*/
/*
* javascript中的每个对象都有prototype属性，
* Javascript中对象的prototype属性的解释是：返回对象类型原型的引用。
* *//*

People.prototype.say = function () {
    alert("People say()");
}

function Student () {

}
Student.prototype = new People();//这一步代替继承
var superSay = Student.prototype.say;
Student.prototype.say = function () {
    superSay.call(this);
    alert("Student say()");
}
var s = new Student();
s.say();
*/


/*信息封装*/
/*(function () {
    var n = "KingSweet-1";
    function Boy (name) {
        this._name = name;
    }
    Boy.prototype.say = function () {
        alert("Boy say() = " + this._name + n);
    };
    Window.Boy = Boy;
}());//加小括号是为了执行
(function () {
    var n = "KingSweet-1";
    function Boy2 (name) {
        this._name = name;
    }
    Boy2.prototype = new Boy();
    var superSay = Boy2.prototype.say;
    Boy2.prototype.say = function () {
        superSay.call(this);
        alert("Boy2 say() " + this._name + n);
    };
    Window.Boy2 = Boy2;
}());//加小括号是为了执行
var b = new Boy2("KS");
b.say();*/
