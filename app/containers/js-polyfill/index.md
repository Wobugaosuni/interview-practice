## call的polyfill

> call(): 使用一个指定的 this 值和若干个指定的参数值的前提下 调用某个函数或方法。

模拟的步骤可以分为：
1. 将函数设为对象的属性
2. 执行该函数
3. 删除该函数

```js
Function.prototype.call2 = function(obj) {
    // 获取调用call的函数，用this可以获取。
    // this 指向函数bar
    obj.fn = this;

    // 获取其他参数
    const otherArgu = [...arguments].slice(1)

    // 执行函数
    obj.fn(otherArgu);

    // 删除该函数
    delete obj.fn;
}

// 测试一下
var foo = {
    value: 1
};

function bar(val) {
    console.log(this.value + val);
}

bar.call2(foo, 'xxx'); // 1
```

文档参考：[](https://juejin.im/post/5907eb99570c3500582ca23c)

## new操作做了什么事情

```js
var obj  = {};
obj.__proto__ = F.prototype;
F.call(obj);
```

第一行，我们创建了一个空对象obj;
第二行，我们将这个空对象的__proto__成员指向了F函数对象prototype成员对象;
第三行，我们将F函数对象的this指针替换成obj，然后再调用F函数.

我们可以这么理解: 以 new 操作符调用构造函数的时候，函数内部实际上发生以下变化：
1、创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
2、属性和方法被加入到 this 引用的对象中。
3、新创建的对象由 this 所引用，并且最后隐式的返回 this.

## 怎么判断构造函数的调用是 new 还是 普通函数调用？