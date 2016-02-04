/**
** 这里通过引入代理类的方式，解决Demo2的问题
**/

var CreateDiv = function(html) {
    this.html = html;
    this.init();
};

CreateDiv.prototype.init = function() {
    var div = document.creatElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
};

var ProxySingletonCreateDiv = (function() {
    var instance;
    return function(html) {
        if(!instance){
            instance = new CreateDiv(html);
        }

        return instance;
    }
})();

var a = new ProxySingletonCreateDiv('sven1');
var b = new ProxySingletonCreateDiv('sven2');
console.log( a === b);      //true


/**
** 通过引入代理类的方式，我们完成了一个单例模式的编写，跟之前不同的是，现在我们把负责管理单例的逻辑移到了代理类ProxySingletonCreateDiv中，这样一来，CreateDiv就变成了一个普通的类，它跟ProxySingletonCreateDiv组合起来达到单例模式的效果
**/