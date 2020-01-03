import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'
import test from './about'
import test2 from './继承1-原型链'
import test3 from './继承2-借用构造函数'
import test4 from './继承3-组合'
import test5 from './继承4-寄生组合'

class JsPrototype extends React.Component {
  render() {
    return (
      <div role="containers:JsPrototype">
        <h2>构造函数与原型</h2>
        <button onClick={() => test()}>prototype测试</button>

        <h2>原型链继承</h2>
        <button onClick={() => test2()}>测试</button>

        <h2>借用构造函数继承（经典继承）</h2>
        <button onClick={() => test3()}>测试</button>

        <h2>组合继承（伪经典继承）</h2>
        <button onClick={() => test4()}>测试</button>

        <h2>寄生组合继承</h2>
        <button onClick={() => test5()}>测试</button>
      </div>
    )
  }
}

export default JsPrototype
