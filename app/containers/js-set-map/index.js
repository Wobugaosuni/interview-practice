import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'

const arr = []
const set = new Set()
for (let i = 0; i < 1000001; i++) {
  arr.push(i)
  set.add(i)
}

// console.log('arr:', arr)
// console.log('set:', set)

class JsSetMap extends React.Component {
  render() {
    return (
      <div role="containers:JsSetMap">
        <h2>查找元素，Set快了33倍</h2>
        <button onClick={() => {
          console.time('Array')
          const result = arr.indexOf(123123) !== -1
          console.timeEnd('Array')
        }}>Array</button>
        <button onClick={() => {
          console.time('Set')
          const result = set.has(123123)
          console.timeEnd('Set')
        }}>Set</button>

        <h2>添加元素，Set慢了两倍</h2>
        <button onClick={() => {
          const random = Math.round(Math.random() * 100)
          console.time('Array')
          arr.push(random)
          console.timeEnd('Array')
        }}>Array</button>
        <button onClick={() => {
          const random = Math.round(Math.random() * 100)
          console.time('Set')
          set.add(random)
          console.timeEnd('Set')
        }}>Set</button>

        <h2>删除元素，Set慢了五倍</h2>
        <button onClick={() => {
          console.time('Array')
          arr.splice(1000000)
          console.timeEnd('Array')
        }}>Array</button>
        <button onClick={() => {
          console.time('Set')
          set.delete(1000000)
          console.timeEnd('Set')
        }}>Set</button>
      </div>
    )
  }
}

export default JsSetMap
