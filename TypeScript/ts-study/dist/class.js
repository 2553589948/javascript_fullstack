"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cat = (function () {
    function Cat() {
    }
    Cat.prototype.run = function () {
        console.log('跑起来了...');
    };
    Cat.prototype.private = function () {
        console.log('吃起来了...');
    };
    Cat.prototype.sleep = function () {
        console.log('洗洗睡吧...');
    };
    return Cat;
}());
var cat = new Cat();
cat.run();
var GTR = (function (_super) {
    __extends(GTR, _super);
    function GTR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GTR.prototype.init = function () {
        this.run();
    };
    return GTR;
}(Cat));
var gtr = new GTR();
//# sourceMappingURL=class.js.map