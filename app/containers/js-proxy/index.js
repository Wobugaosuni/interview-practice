import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'

import test from './defineProperty'

class JsProxy extends React.Component {
  constructor(props) {
    super(props)
    this.inputEl = React.createRef()
    this.showEl = React.createRef()

    this.inputEl2 = React.createRef()
    this.showEl2 = React.createRef()
  }

  definePropertyExample() {
    const that = this
    const obj = {}
    Object.defineProperty(obj, 'text', {
      get: function() {
        console.log('get')
      },
      set: function(newV) {
        // 修改
        that.inputEl.current.value = newV
        that.showEl.current.innerHTML = newV
      }
    })

    this.inputEl.current.addEventListener('keyup', (e) => {
      // 修改输入值
      obj.text = e.target.value
    }, false)
  }

  proxyExample() {
    const that = this
    const obj = {}

    const newObj = new Proxy(obj, {
      get: function() {
      },
      set: function(target, key, value) {
        if (key === 'text') {
          // 修改
          that.inputEl2.current.value = value
          that.showEl2.current.innerHTML = value
        }
      }
    })

    this.inputEl2.current.addEventListener('keyup', (e) => {
      // 修改输入值
      newObj.text = e.target.value
    }, false)
  }

  componentDidMount() {
    this.definePropertyExample()
    this.proxyExample()
  }

  render() {
    return (
      <div role="containers:JsProxy">
        <h2>defineProperty</h2>
        <button onClick={() => test()}>测试</button>

        <h2>defineProperty版本：输入框实时输入同步 </h2>
        <input type="text" ref={this.inputEl} />
        输入值是：<span ref={this.showEl}></span>

        <h2>proxy版本：输入框实时输入同步 </h2>
        <input type="text" ref={this.inputEl2} />
        输入值是：<span ref={this.showEl2}></span>
      </div>
    )
  }
}

export default JsProxy
