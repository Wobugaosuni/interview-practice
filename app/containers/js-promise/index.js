import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'

function clickTimeout() {
  function timeout(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms, 'done') 
    })
  }

  timeout(100).then(value => {
    console.log(value) // done
  })
}

function taskOrder() {
  setTimeout(() => { 
    console.log(1)
  }, 0)

  new Promise((resolve, reject) => {
    console.log(2)
    for(let i = 0; i < 10; i++) {
      i == 9 && resolve()
    }
    console.log(3)
  }).then(() => {
    console.log(4)
  })
  console.log(5)
}
  

class JsPromise extends React.Component {
  render() {
    return (
      <div role="containers:Promise">
        <h2>1. 模仿异步请求 Promise</h2>
        <SyntaxHighlighter language="javascript">
          {clickTimeout.toString()}
        </SyntaxHighlighter>
        <button onClick={() => clickTimeout()}>执行函数</button>

        <h2>2. 宏任务、微任务的输出顺序</h2>
        <SyntaxHighlighter language="javascript">
          {taskOrder.toString()}
        </SyntaxHighlighter>
        <button onClick={() => taskOrder()}>执行函数</button>
      </div>
    )
  }
}

export default JsPromise
