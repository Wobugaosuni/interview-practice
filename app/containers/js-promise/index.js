import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'
import {createPromise, promiseByReduce, promiseByAsync, promiseByShift} from './promise-queue'
import {promiseRace} from './promise-timeout'
import {createPromise2, promiseAll} from './promise-all'

import './promise-map'

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
  console.log(1)
  setTimeout(() => {
    console.log(2)
  }, 0)
  
  new Promise(resolve => {
    console.log(3)
    resolve()
  }).then(() => setTimeout(() => {
    console.log(4)
  }, 0))
    .then(() => console.log(5))
    
  console.log(6)
}

function taskOrder2() {
  console.log('1')
  async function async1() {
      console.log('2')
      await async2()
      console.log('3')
  }
  async function async2() {
      console.log('4')
  }

  async1()

  new Promise(function(resolve) {
      console.log('5')
      resolve()
  }).then(function() {
      console.log('6')
  })
  console.log('7')

  // 猜测输出顺序
  // 同步任务：1 5 7
  // 微任务：2 4 3 6

  // 实际执行顺序：1 2 4 5 7 3 6
}

function howError() {
  Promise.resolve()
    .then(() => {
      return new Error('error!!!')
    })
    .then((res) => {
      console.log('then: ', res)
    })
    .catch((err) => {
      console.log('catch: ', err)
    })
}

function catchThen() {
  Promise.resolve()
    .then(() => {
      throw new Error('error!')
    })
    .catch((err) => {
      console.log('catch: ', err)
    })
    .then((res) => {
      throw new Error('error!!!')
    })
    .catch((err) => {
      console.log('catch: ', err)
    })
    .then((res) => {
      console.log('then: ', res)
    })
}

function lastCatch() {
   Promise.resolve()
    .then(() => {
      throw new Error('error!')
    })
    .then((res) => {
      throw new Error('error!!!')
    })
    .then((res) => {
      console.log('then: ', res)
    })
    .catch((err) => {
      console.log('catch: ', err)
    })
}

function thenThen () {
  const p0 = new Promise((resolve) => {
    resolve()
  }).then(() => console.log(0))
  .then(() => console.log(1))

  const p1 = new Promise((resolve) => {
    resolve()
  }).then(() => console.log(2))
  .then(() => console.log(3))

  p0.then(() => console.log(5))
}

class JsPromise extends React.Component {
  promiseQueue() {
    promiseByReduce([
      createPromise(1000, 1),
      createPromise(2000, 2),
      createPromise(3000, 3)
    ])
  }

  promiseQueueByAsync() {
    promiseByAsync([
      createPromise(1000, 1),
      createPromise(2000, 2),
      createPromise(3000, 3)
    ])
  }

  promiseQueueByShift() {
    promiseByShift([
      createPromise(1000, 1),
      createPromise(2000, 2),
      createPromise(3000, 3)
    ])
  }

  promiseAllTest() {
    promiseAll([
      createPromise2(),
      createPromise2(),
      createPromise2(),
    ])
    .then(content => {
      console.log('all comes:', content)
    })
    .catch(error => {
      console.log('one fail:', error)
    })
  }

  promiseMap() {
    // 模仿请求
    function get (i) {
      console.log('In ', i)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(i * 1000) 
          console.log('Out', i, 'Out')
        }, i * 1000)
      })
    }

    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // 十个请求的函数
    const gets = list.map(item => () => get(item))

    Promise.map(gets, 2)
  }

  render() {
    return (
      <div role="containers:Promise">
        <h2>1. 模仿异步请求 Promise</h2>
        <SyntaxHighlighter language="javascript">
          {clickTimeout.toString()}
        </SyntaxHighlighter>
        <button onClick={() => clickTimeout()}>执行函数</button>

        <h2>2.1 宏任务、微任务的输出顺序</h2>
        <SyntaxHighlighter language="javascript">
          {taskOrder.toString()}
        </SyntaxHighlighter>
        <button onClick={() => taskOrder()}>执行函数</button>

        <h2>2.2 微任务的输出顺序</h2>
        <button onClick={() => taskOrder2()}>执行函数</button>

        <h2>2.3 多个then的执行顺序</h2>
        <button onClick={() => thenThen()}>执行函数</button>

        <h2>3. 抛出错误的姿势</h2>
        <SyntaxHighlighter language="javascript">
          {howError.toString()}
        </SyntaxHighlighter>
        <button onClick={() => howError()}>执行函数</button>

        <h2>4. catch、then 顺序</h2>
        <SyntaxHighlighter language="javascript">
          {catchThen.toString()}
        </SyntaxHighlighter>
        <button onClick={() => catchThen()}>执行函数</button>

        <h2>5. 统一捕获异常</h2>
        <SyntaxHighlighter language="javascript">
          {lastCatch.toString()}
        </SyntaxHighlighter>
        <button onClick={() => lastCatch()}>执行函数</button>

        <h2>6. 编程题：多个promise如何串行</h2>
        <button onClick={() => this.promiseQueue()}>使用.reduce方法</button>
        <button onClick={() => this.promiseQueueByAsync()} className="mt12">使用.async await方法</button>
        <button onClick={() => this.promiseQueueByShift()} className="mt12">使用shift方法，请求失败不继续</button>

        <h2>7. promise.all 如何实现</h2>
        <button onClick={() => this.promiseAllTest()}>测试</button>

        <h2>8. promise里的请求超时，如何取消？(有赞)</h2>
        <button onClick={() => promiseRace(6000)}>使用.race 方法</button>

        <h2>9. 编程题：JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个（今日头条）</h2>
        <button onClick={() => this.promiseMap()}>测试</button>
      </div>
    )
  }
}

export default JsPromise
