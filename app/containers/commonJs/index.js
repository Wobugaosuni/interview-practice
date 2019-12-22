import React from 'react'
import './index.styl'

var mod = require('./commonJS')
import { counter, incCounter, foo } from './es6'

// CommonJS 模块输出的是值的拷贝
function commonJSTest() {
  console.log('commonJSTest:', mod.counter)  // 3
  mod.incCounter()
  console.log('commonJSTest:', mod.counter) // 3
}
// 对值重新赋值
function commonJSTest2() {
  mod.counter = 100
  console.log('commonJSTest 重新赋值:', mod.counter)  // 100
}

// es6 模块输出的是值的引用
function es6Test() {
  console.log('es6Test:', counter)  // 3
  incCounter()
  console.log('es6Test:', counter)  // 4
}
// 变量总是绑定其所在的模块
function es6Test2() {
  console.log('es6Test2 foo:', foo)  // bar

  setTimeout(() => console.log('es6Test2 foo:', foo), 500) // baz
}
// 引用的变量是只读的，对它进行重新赋值会报错
function es6Test3() {
  foo = 'change'
  counter += 1
  console.log('es6Test2 重新赋值:', foo)  // foo is not defined
  console.log('es6Test2 值相加:', counter)  // counter is not defined
}


class commonJS extends React.Component {
  render() {
    return (
      <div role="containers:commonJS">
        <h2>commonJS 模块输出的是值的拷贝</h2>
        <button onClick={() => commonJSTest()}>测试</button>
        
        <h2>commonJS 可以重新赋值</h2>
        <button onClick={() => commonJSTest2()}>测试</button>

        <h2>es6 模块输出的是值的引用</h2>
        <button onClick={() => es6Test()}>测试</button>

        <h2>es6 变量总是绑定其所在的模块</h2>
        <button onClick={() => es6Test2()}>测试</button>

        <h2>es6 引用的变量是只读的，对它进行重新赋值会报错</h2>
        <button onClick={() => es6Test3()}>测试</button>
      </div>
    )
  }
}

export default commonJS
