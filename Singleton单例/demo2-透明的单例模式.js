/**
**  这个demo的目标是实现一个“透明”的单例类，用户从这个类中创建对象的时候，可以像其他任何普通类一样
**  CreateDiv单例类，作用是在页面中创建唯一的div节点
**/

var CreateDiv = (function() {

    var instance;

    var CreateDiv = function(html) {
        if(instance){
            return instance;
        }
        this.html = html;
        this.init();

        return instance = this;
    };

    CreateDiv.prototype.init = function() {
        var div = document.creatElement('div');
        div.innerHTML = this.html;
        document.body.appendChild(div);
    }

    return CreateDiv;
})();

var a = new CreateDiv('sven1');
var b = new CreateDiv('sven2');

console.log(a === b);       //true

/**
** demo虽然完成了一个透明的单例类的编写，但是同样有一些缺点
** 1. 为了把 instance 封装起来，使用了自执行的匿名函数和闭包，并且让这个匿名函数返回真正的Singleton构造方法，这增加了一些程序的复杂度，阅读起来也不是很舒服
** 2. CreateDiv的构造函数实际上负责了两件事情，第一是创建对象和执行初始化init方法，第二是保证只有一个对象，违反了“单一职责原则”，*如果某天需要把这个类从单例类变成一个普通的可产生多个实例的类，就必须改写CreateDiv构造函数，把控制创建唯一对象的那一段代码去掉，这种修改会给我们带来不必要的烦恼
**/