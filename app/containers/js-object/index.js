import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'
import {clone, deepCloneObj, find, findAge} from './util'

const obj = {
  x: 1,
  y: {
      m: 1
  }
}

const obj2 = {
  name: 'lily',
  age: 88,
  child: [{
    name: 'jack',
    age: 60,
    child: [{
      name: 'rose',
      age: 40,
    }]
  }, {
    name: 'pin',
    age: 70
  }]
}

class JsObject extends React.Component {
  render() {
    return (
      <div role="containers:JsObject">
        <h2>1.1 深拷贝一个对象</h2>
        <button onClick={() => {
          const result = deepCloneObj(obj)
          result.y.m = 2
          console.log('obj:', obj)
          console.log('result:', result)
        }}>
        测试</button>

        <h2>1.2 深拷贝一个对象（对象里含数组）</h2>
        <button onClick={() => {
          const result = clone(obj2)
          result.child[0].name = 'shallker'
          console.log('obj2:', obj2)
          console.log('result:', result)
        }}>
        测试</button>


        <h2>2. 找出对应的属性值，没有就返回默认值</h2>
        <button onClick={() => {
          // const result = find(obj, 'y.n', '1')
          const result = find(obj, null, '1')

          console.log('result:', result)
        }}>测试</button>

        <h2>3. 找出对应key的age</h2>
        <button onClick={() => {
          const age = findAge(obj2, 'rose')
          console.log('age:', age)
        }}>测试</button>
      </div>
    )
  }
}

export default JsObject
