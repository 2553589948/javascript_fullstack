"use strict";
var notSure = 4;
notSure = 'kyle';
var value;
value = true;
value = 1;
value = 'hello';
value = Symbol('type');
value = {};
value = [];
value.foo.bar;
value();
new value();
value[0][1];
var val;
val = true;
val = 1;
val = 'hello';
val = Symbol('type');
val = {};
val = [];
val.foo.bar;
val();
new val();
val[0][1];
function error(message) {
    throw new Error(message);
}
var empty = [];
empty.push(1);
var list = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4];
var list3;
var x;
x = ['hello', 10, false];
x = ['hello'];
x = [10, 'hello', true];
var Direction;
(function (Direction) {
    Direction[Direction["center"] = 1] = "center";
})(Direction || (Direction = {}));
var value2;
value2 = Direction;
value2 = [1];
value2 = [1, 'hello'];
value2 = {};
//# sourceMappingURL=unbase.js.map