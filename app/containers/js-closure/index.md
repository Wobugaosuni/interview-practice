
## 什么是闭包？闭包的使用场景？

#### 定义

- 是一个函数
- 能够访问其他函数作用域中的变量
- 同时能够保存住这个变量而不会销毁、不会污染全局
- 使变量的值始终保存在内存中

#### 场景

1. 防抖和节流
2. 柯里化
3. 实现私有方法

## 防抖节流了解一下（网易游戏）

#### 防抖

- debounce：当持续触发事件时，指定时间内没有再触发事件，事件处理函数才会执行一次。例如收藏按钮、输入框校验等
```js
/**
 * 防抖(使用函数柯里化)
 * @param fn 执行的函数
 * @param wait 间隔
 * 返回的函数通过闭包的形式记住了debounce函数的参数
 */
export const debounce = (fn, wait = 300) => {
  let timeout = null
  return () => {
    clearTimeout(timeout)
    timeout = setTimeout(fn, wait)
  }
}
```

#### 节流

- throttle：当持续触发事件时，保证一定时间段内，只调用一次事件处理函数
例子：用户在一个可以无限滚动的页面上进行向下滚动。你必须检查用户距离页面底部还有多远，如果用户已经将要滚动到底部，我们需要发送 Ajax 请求后续内容添加到页面底部
```js
var throttle = (func, delay) => {
    var prev = Date.now()
    return () => {
      var now = Date.now()

      if (now - prev >= delay) {
        func()
        prev = Date.now()
      }
    }
}
function handle() {
    console.log(Math.random());
}
window.addEventListener('scroll', throttle(handle, 1000))
```

- requestAnimationFrame：可替代 throttle ，函数需要重新计算和渲染屏幕上的元素时，想保证动画或变化的平滑性，可以用它

参考：https://mp.weixin.qq.com/s/Vkshf-nEDwo2ODUJhxgzVA

## 函数柯里化（闭包）

在不侵入函数的前提下，为函数 预置通用参数，供多次重复调用.

#### 使用场景

- 参数复用
- 延迟执行
例如统计一个人的加班时间，没必要每天都累加。只需记录每天的加班时间，月底进行汇总就可以了

#### 代码实现

```js
const currying = (function () {
  const args = []
  return function(data) {
    if (data) {
      args.push(data)
    } else {
      console.log('args:', args)
      // 汇总
      const sum = args.reduce((accu, current) => accu + current, 0)
      console.log('sum:', sum)
    }
  }
})()

currying(2) // 记录
currying(3) // 记录
currying(4) // 记录

currying() // 相加
```

参考：
- [简单理解JavaScript中的柯里化和反柯里化](https://juejin.im/post/58a5879e1b69e6006d1e8748)


## 实现私有方法

避免非核心的方法弄乱了代码的公共接口部分

```js
var Counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }   
})();

alert(Counter.value()); /* 提示 0 */
Counter.increment();
Counter.increment();
alert(Counter.value()); /* 提示 2 */
Counter.decrement();
alert(Counter.value()); /* 提示 1 */
```

## 文档参考

- [闭包](https://leohxj.gitbooks.io/front-end-database/content/javascript-basic/closure.html)