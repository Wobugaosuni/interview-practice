## 1. Promise 基础

1. Promise的第一个参数是resolved状态的回调函数，第二个参数是rejected状态的回调函数
2. Promise返回的是一个新的Promise实例
3. Promise实例具有then方法，then方法是定义在原型对象上的。它的作用是为Promise实例添加**状态改变时**的回调函数
4. setTimeout 一旦定时器到期，其余参数会作为参数传递给function

## 2. 宏任务、微任务的输出顺序

>输出 2 3 5 4 1

then和settimeout执行顺序，即setTimeout(fn, 0)在下一轮“事件循环”开始时执行，Promise.then()在本轮“事件循环”结束时执行。因此then 函数先输出，settimeout后输出