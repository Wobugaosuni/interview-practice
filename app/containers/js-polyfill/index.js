import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'
import './util'

function Person(name) {
  // console.log('this:', this.name)
  // 普通函数调用：报错，this: undefined
  // new 调用：Person类
  if (this instanceof Person) {
    console.log('new调用')
  } else {
    throw new Error('普通函数调用')
  }
  this.name = name
}

function callPolyfill() {
  // 测试一下
  var foo = {
      value: 1
  }

  function bar(val) {
      console.log(this.value + val)
  }

  bar.call2(foo, 'xxx')
}

class JsPolyfill extends React.Component {
  render() {
    return (
      <div role="containers:JsPolyfill">
        <h2>实现call的polyfill</h2>
        <button onClick={() => callPolyfill()}>测试</button>

        <h2>判断函数是 new 还是 () 调用</h2>
        <button onClick={() => Person()}>普通函数调用</button>
        <button onClick={() => new Person()}>new 调用</button>
      </div>
    )
  }
}

export default JsPolyfill
