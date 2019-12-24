## Web Worker 用途

可以将一些耗时的数据处理操作从主线程中剥离，使主线程更加专注于页面渲染和交互

Web Worker (工作线程)分为两种类型
1. 专用线程（Dedicated Web Worker） （默认）
2. 共享线程（Shared Web Worker）

## 需要注意的点

1. 有同源限制
2. 运行在另一个上下文中，无法使用Window对象
3. 无法访问 DOM 节点
4. Web Worker 的运行不会影响主线程，但与主线程交互时仍受到主线程单线程的瓶颈制约。换言之，如果 Worker 线程频繁与主线程进行交互，主线程由于需要处理交互，仍有可能使页面发生阻塞
5. 共享线程可以被多个浏览上下文（Browsing context）调用，但所有这些浏览上下文必须同源（相同的协议，主机和端口号）

## 线程的创建

1. 需要得到脚本的 URL 地址。一般情况下，这段脚本是放在 server 上的
```js
var myWorker = new Worker("my_task.js")
```
2. 如果只是一个简单的需要放到后台执行的脚本，如果可以打包到一起直接发布到客户浏览器会节省很多的时间  
把用户的 task（一个方法）转成字符串，通过 URL.createObjectURL() 创建 url 对象， 创建出一个 Worker
```js
var myTask = `
    var total = 0;
    for (let i = 0; i < 5000000000; i++) {
      total += i
    }
    postMessage(total)
`;
var blob = new Blob([myTask]);
var myWorker = new Worker(window.URL.createObjectURL(blob));
```

## 数据传递

- 通过 postMessage() 方法发送消息
- 通过 onmessage 事件接收消息

在这个过程中**数据并不是被共享的，而是被复制的**

## 文档参考

- [JavaScript 性能利器 —— Web Worker](https://juejin.im/post/5c10e5a9f265da611c26d634#heading-0)
- [使用Web Worker优化代码](https://juejin.im/post/5d7745a7e51d4561bb33fbd6)
- [浅谈HTML5 Web Worker](https://juejin.im/post/59c1b3645188250ea1502e46)