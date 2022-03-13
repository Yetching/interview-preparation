## 知识点
1. 原型链
2. 继承，多种实现继承的方法
3. 作用域，函数声明时会创建scope，函数执行的时候会往执行上下文里加入scope同时会加入当前的活动对象
4. 闭包
   - 1.即使包含函数的上下文被销毁但是他还存在 2.函数引用了自由变量
   - 自由变量是指除去形参和局部变量，函数可以使用的变量，因此理论上来说因为全局的变量是自由变量，所以所有函数都是闭包
5. 变量提升
   - 函数声明提升高于形参和变量声明，变量声明优先级最低，但是重名的形参和函数声明不建议存在，猜测是形参属于let

6. this指向问题，通常来说this永远指向调用它的对象，但实际底层的概念很复杂
   - 比如
   ```javascript
   var name = 'global'
   var foo = {
     name: 'scope',
     bar: function() {
       console.log(this.name)
     }
   }
   foo.bar() // scope
   (false || foo.bar)() // global
   ```
7. new的过程中发生了什么
   - 新建一个对象
   - 将对象的__proto__指向构造函数的prototype
   - 返回这个对象

8. 立即执行函数

9. 模块模式
    ```javascript
    var counter = (function(){
    var i = 0;
    return {
        get: function(){
            return i;
        },
        set: function(val){
            i = val;
        },
        increment: function(){
            return ++i;
        }
    }
    }());
    counter.get();//0
    counter.set(3);
    counter.increment();//4
    counter.increment();//5

    conuter.i;//undefined (`i` is not a property of the returned object)
    i;//ReferenceError: i is not defined (it only exists inside the closure)
    ```
10. typeof和instanceof
    - typeof用于判断基本类型和函数，引用类型只能获得object
    - instanceof是用于判断实例的原型链是否有构造函数的prototype
    - 特殊的
      ```javascript 
      function Foo() {
      }

      Object instanceof Object // true
      Function instanceof Function // true
      Function instanceof Object // true
      Foo instanceof Foo // false
      Foo instanceof Object // true
      Foo instanceof Function // true
      ```
      ![图片](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/5/28/163a55d5d35b866d~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)
      大概理解就是Function和Object是用Function构造而成的，因此都满足Function.__proto === Function.prototype、Object.__proto === Function.prototype，最终都会指向Object.prototype
    - 最好的判断类型的方法Object.prototype.toString.call(obj)

11. 手写bind
    - bind的特点：返回一个函数，可以传入参数列表