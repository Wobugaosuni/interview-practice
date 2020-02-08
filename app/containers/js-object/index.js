import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'
import {deepCloneObj} from './util'

const obj = {
  x: 1,
  y: {
      m: 1
  }
}

class JsObject extends React.Component {
  render() {
    return (
      <div role="containers:JsObject">
        <h2>1. 深拷贝一个对象</h2>
        <button onClick={() => {
          const result = deepCloneObj(obj)
          result.y.m = 2
          console.log('obj:', obj)
          console.log('result:', result)
        }}>
        测试</button>
      </div>
    )
  }
}

export default JsObject
