function create(obj){
    // xxx.__proto__ = obj;
    // return xxx;
    function f(){

    }
    f.prototype = obj
    return new f()
}

var Person = {
    name:"noname",
    age:0,
    greet: function(){
        console.log(`hello,${this.name+this.age}`)
    }
}
var tom = create(Person);
tom.name = 'tom';
tom.age = 22
tom.greet();