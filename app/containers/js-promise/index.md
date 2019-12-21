## 1. Promise 基础

1. Promise的第一个参数是resolved状态的回调函数，第二个参数是rejected状态的回调函数

2. Promise返回的是一个新的Promise实例

3. Promise实例具有then方法，then方法是定义在原型对象上的。它的作用是为Promise实例添加**状态改变时**的回调函数

4. setTimeout 一旦定时器到期，其余参数会作为参数传递给function

## 2. 宏任务、微任务的输出顺序

>输出: 1 3 6 5 2 4

1. 虽然`setTimeout`设置了立马执行，但在不同浏览器中，它是有延时的。chrome延时4ms，旧的ie延时1/60s。是一个异步执行的函数，在以上代码中最后执行

2. Promise.then()`也是一个异步的函数，但跟`setTimeout`相比，`Promise.then()`是一个`micro task`，`setTimeout`是一个`macro task`，`Promise.then()`远比`setTimeout`执行的快

3. `Promise.resolve()`是同步的，按顺序执行

4. `Promise.resolve().then(() => {})`相当于`new Promise(resolve => resolve()).then()`

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

```js

/*Promise.all 接收promise 对象的数组作为参数，
  当数组里 promise 对象全部变为resolve或 有 reject 状态的时候，
  它才会去调用 .then 方法,它们是并发执行的。*/
export function promiseAll(promises) {
  let res = []
  let count  = 0
  return new Promise((resolve,reject) => {
    promises.forEach((item, index) => {
      Promise.resolve(item).then((value) => {
        res[index] = value
        count++
        if(count === promises.length) {
        return resolve(res)
        }
      }, err => {
        return reject(err)
      })

    })
  })
}
```

## promise里的请求超时，如何取消？(有赞)

使用 promise.race 和 reject 结合

```js
const request = new Promise(function(resolve){
  setTimeout(function() { resolve('I did it'); }, 1000);
})
const timeout = new Promise(function(resolve, reject){
  setTimeout(function() { reject('Timed out'); }, 800);
})

const race = Promise.race([request, timeout]);

race.then(function(data){
  console.log('request success', data);
}).catch(function(e){
  console.log('request timeout', e);
});
```

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

可以使用reduce方法，第一个参数是上次的执行结果，第二个参数是初始值实例
```js
function runPromiseByQueue(myPromises) {
  myPromises.reduce(
    (accumulator, nextPromise) => accumulator.then(() => nextPromise()),
    Promise.resolve()
  );
}

const createPromise = (time, id) => () =>
  new Promise(solve =>
    setTimeout(() => {
      console.log("promise", id);
      solve();
    }, time)
  );

runPromiseByQueue([
  createPromise(3000, 1),
  createPromise(2000, 2),
  createPromise(1000, 3)
]);
```
利用 reduce 的函数整体是个同步函数，自己先执行完毕构造 Promise 队列，然后在内存异步执行

使用async/await:
```js
async function runPromiseByQueue(myPromises) {
  for (let value of myPromises) {
    await value();
  }
}
```
利用 async/await 的函数是利用将自己改造为一个异步函数，等待每一个 Promise 执行完毕

参考：
- [精读《用 Reduce 实现 Promise 串行执行》](https://juejin.im/post/5bd65b98f265da0a91458ee6)
- [面试官： 来说一下如何串行执行多个Promise](https://juejin.im/post/5c931bcce51d4578fa00b9b9)