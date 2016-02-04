/**
** 单例模式：保证一个类仅有一个实例，并提供一个访问它的全局变量
**/

var Singleton = function(name){
    this.name = name;
};

Singleton.prototype.getName = function(){
    console.log(this.name);
}

Singleton.getInstance = (function(){
    var instance = null;
    return function(name) {
        if(!instance){
            instance = new Singleton(name);
        }
        return instance;
    }
})();

var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');

a.getName();        //sven1
b.getName();        //sven1
a === b;        //true

/**
** 我们通过 Singleton.getInstance 来获取 Singleton类的唯一实例，这种方式相对简单，但有一个问题，就是增加了这个类的“不透明性”，使用者必须知道这是一个单例类，并且要知道使用 Singleton.getInstance 来获取实例。
** 虽然通过这种方式实现了一个单例模式，但是这段单例模式代码的意义并不大。
**/