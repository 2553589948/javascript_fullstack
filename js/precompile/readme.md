--预编译 四部曲 发生在函数执行之前
    1.创建AO对象
    2.找形参和变量声明，将变量声明和形参作为AO属性名，值为undefined
    3.将实参值和形参值统一
    4.在函数体里找函数声明，将函数名作为AO对象的属性名，值为函数体

function fn(a) {
            console.log(a)
            var a = 123
            console.log(a)
            function a() {}
            console.log(a)
            var b = function(){}
            console.log(b)
            function d() {}
}
fn(1)

预编译过程
1.AO {
    
}
2.AO {
    a:undefined, 
    b:undefined
}
3.AO {
    a:1, 
    b:undefined
}
4.AO {
    a:function(){}, 
    b:undefined,
    d:function(){}
}

预编译先过一边所有代码,看有没有bug,没有就让浏览器从上往下执行

--预编译也发生在全局
1.创建GO对象
2.找形参和变量声明，将变量声明和形参作为GO属性名，值为undefined
3.在函数体里找函数声明，将函数名作为GO对象的属性名，值为函数体

GO === window
GO {

}