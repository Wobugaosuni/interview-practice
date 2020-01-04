import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'

import {test} from './defineProperty'

class JsProxy extends React.Component {
  constructor(props) {
    super(props)
    this.inputEl = React.createRef()
    // this.showEl = React.createRef()

    this.inputEl2 = React.createRef()
    this.showEl2 = React.createRef()

    this.state = {
      showContent: ''
    }

    this.list = {
      data: ['苹果', '椰子', '香蕉']
    }
    this.list2 = {
      data: ['苹果', '椰子', '香蕉']
    }
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
        // that.showEl.current.innerHTML = newV

        that.setState({showContent: newV})
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
      set: function(target, key, value, receiver) {
        if (key === 'text') {
          // 修改
          that.inputEl2.current.value = value
          that.showEl2.current.innerHTML = value
        }
        return Reflect.set(target, key, value, receiver)
      }
    })

    this.inputEl2.current.addEventListener('keyup', (e) => {
      // 修改输入值
      newObj.text = e.target.value
    }, false)
  }

  // 监听数组的变化
  definePropertyList() {
    Object.defineProperty(this.list, 'data', {
      get: function() {},
      set: function(newV) {
        console.log('newV:', newV)
      }
    })
  }

  proxyList() {
    const that = this

    this.newList = new Proxy(this.list2, {
      set: function(target, key, value) {
        if (key === 'data') {
          // 修改
          console.log('proxy set:', value)
        }
      }
    })
  }

  componentDidMount() {
    this.definePropertyExample()
    this.proxyExample()

    this.definePropertyList()
    this.proxyList()
  }

  render() {
    return (
      <div role="containers:JsProxy">
        <h2>defineProperty</h2>
        <button onClick={() => test()}>测试</button>

        <h2>defineProperty版本：输入框实时输入同步 </h2>
        <input type="text" ref={this.inputEl} />
        输入值是：<span>{this.state.showContent}</span>

        <h2>proxy版本：输入框实时输入同步 </h2>
        <input type="text" ref={this.inputEl2} />
        输入值是：<span ref={this.showEl2}></span>

        {/* <h2>defineProperty：监听数组的变化</h2>
        <ul>
          {
            this.list.data.map(item => <li key={item}>{item}</li>)
          }
        </ul>
        <button onClick={() => this.list.data.push('西瓜')}>测试</button> */}

        {/* <h2>proxy：监听数组的变化</h2>
        <ul>
          {
            this.list2.data.map(item => <li key={item}>{item}</li>)
          }
        </ul>
        <button onClick={() => this.newList.data.push('西瓜')}>测试</button> */}
      </div>
    )
  }
}

export default JsProxy
