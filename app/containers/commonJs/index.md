## CommonJS 和 es6的差异

#### CommonJS

1. Node.js是commonJS规范的主要实践者

2. 实际使用时，用**module.exports**导出当前模块，用**require**加载模块。

3. 输出的是值的拷贝，可以重新赋值

4. 同步加载

5. 顶层的this指向当前模块

#### Es6

1. 用**export**命令用于规定模块的对外接口，**import**命令用于输入其他模块提供的功能。

2. 输出的是值的引用，是只读的，对它进行重新赋值会报错

3. 异步加载
浏览器加载 ES6 模块，也使用`<script>`标签，但是要加入`type="module"`属性
```html
  <script type="module" src="./foo.js"></script>
  <!-- 等同于 -->
  <script type="module" src="./foo.js" defer></script>
```
浏览器对于带有`type="module"`的`<script>`，都是**异步加载**，不会造成堵塞浏览器，即等到整个页面渲染完，再执行模块脚本，等同于打开了`<script>`标签的defer属性
`<script>`标签的async属性也可以打开，这时只要加载完成，渲染引擎就会中断渲染立即执行。执行完成后，再恢复渲染

4. 顶层的this指向undefined
```html
  <script type="module">
    console.log('module this:', this) // undefined
  </script>
  <script>
    console.log('this:', this) // window
  </script>
```

参考：[Module 的加载实现](http://es6.ruanyifeng.com/#docs/module-loader)