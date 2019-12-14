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
  console.log('commonJSTest 重新赋值:', mod.counter)  // 3
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
  console.log('es6Test2 重新赋值:', foo)  // foo is not defined
}


class commonJS extends React.Component {
  render() {
    commonJSTest()
    commonJSTest2()
    es6Test()
    es6Test2()
    es6Test3()

    return (
      <div role="containers:commonJS">
        <h2>commonJS and es6</h2>
      </div>
    )
  }
}

export default commonJS
