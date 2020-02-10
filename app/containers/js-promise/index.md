## 1. Promise 基础

1. Promise的第一个参数是resolved状态的回调函数，第二个参数是rejected状态的回调函数

2. Promise返回的是一个新的Promise实例

3. Promise实例具有then方法，then方法是定义在原型对象上的。它的作用是为Promise实例添加**状态改变时**的回调函数

4. 可以用then方法分别指定**resolved状态**和**rejected**状态的回调函数

5. setTimeout 一旦定时器到期，其余参数会作为参数传递给function

## 2.1 宏任务、微任务的输出顺序

>输出: 1 3 6 5 2 4

1. 虽然`setTimeout`设置了立马执行，但在不同浏览器中，它是有延时的。chrome延时4ms，旧的ie延时1/60s。是一个异步执行的函数，在以上代码中最后执行

2. Promise.then()`也是一个异步的函数，但跟`setTimeout`相比，`Promise.then()`是一个`micro task`，`setTimeout`是一个`macro task`，`Promise.then()`远比`setTimeout`执行的快

3. setTimeout返回一个数字id。如果在then里直接return setTimeout，会把该id传给下一个的then

4. `Promise.resolve()`是同步的，按顺序执行

5. `Promise.resolve().then(() => {})`相当于`new Promise(resolve => resolve()).then()`


>**setTimeout、Promise、Async/Await 的区别**
1. settimeout的回调函数放到宏任务队列里，等到执行栈清空以后执行； 
2. promise.then里的回调函数会放到相应宏任务的微任务队列里，等宏任务里面的同步代码执行完再执行；
3. async函数表示函数里面可能会有异步方法，await后面跟一个表达式，async方法执行时，**遇到await会立即执行表达式**，然后把**表达式后面的代码放到微任务队列里**，让出执行栈让同步代码先执行。

>Promise、Async/Await
1. 当有多个任务并发时，如果任务之间有依赖关系的，建议使用`Async/Await`
2. 没有依赖关系时，建议使用`Promise.all`。如果使用`Async/Await`，会导致性能的降低
```js
async function test() {
  // 以下代码没有依赖性的话，完全可以使用 Promise.all 的方式
  // 如果有依赖性的话，其实就是解决回调地狱的例子了
  await fetch('XXX1')
  await fetch('XXX2')
  await fetch('XXX3')
}
```

## 3. 抛出错误的姿势

1. .then 或者 .catch 中 return 一个 error 对象并不会抛出错误，所以不会被后续的 .catch 捕获，需要改成其中一种：
  1. return Promise.reject(new Error('error!!!'))
  2. throw new Error('error!!!')

2. 因为返回任意一个非 promise 的值都会被包裹成 promise 对象，即 return new Error('error!!!') 等价于 return Promise.resolve(new Error('error!!!'))

## 4. catch、then 顺序

catch后面还有then的话，会继续执行

## 5. 统一捕获异常

放到最后是统一捕获异常，只要有一个.then reject了，后面的then都不执行

## Promise.all 的实现

**参数都是 Promise 的实例**

## promise里的请求超时，如何取消？(有赞)

使用 promise.race（**参数都是 Promise 的实例**） 和 reject 结合

#### 延伸：使用 async await语法呢？

```js
async function run() {
  const result = await Promise.race([
    longTask(),
    timeout(1000),
  ]);
  console.log(result);
}

run().catch(console.error);

async function longTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('long job is done!');
    }, 2000);
  });
}

async function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(`timeout ${ms}ms`));
    }, ms);
  });
}
```

async 会返回一个 promise

参考：
- [stack overflow](https://stackoverflow.com/questions/32461271/nodejs-timeout-a-promise-if-failed-to-complete-in-time)
- [阮一峰关于 race](http://es6.ruanyifeng.com/#docs/promise#Promise-race)

## 多个请求，如何串行？使用async/await呢？(网易云音乐)

- 可以使用reduce方法，第一个参数是上次的执行结果，第二个参数是初始值实例
可以记住上次的请求结果，供下次请求用
利用 reduce 的函数整体是个同步函数，自己先执行完毕构造 Promise 队列，然后在内存异步执行

- 使用async/await
for 循坏，比较适合独立请求
利用 async/await 的函数是利用将自己改造为一个异步函数，等待每一个 Promise 执行完毕

参考：
- [精读《用 Reduce 实现 Promise 串行执行》](https://juejin.im/post/5bd65b98f265da0a91458ee6)
- [面试官： 来说一下如何串行执行多个Promise](https://juejin.im/post/5c931bcce51d4578fa00b9b9)

## 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个

关键在于维护一个队列，当超过限定数量的 Promise 时，则交与队列维护

参考：
- [如何对 Promise 限流：实现一个 Promise.map](https://juejin.im/post/5d4a1d30f265da03f564cbf1)