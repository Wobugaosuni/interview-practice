import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'

import {myAjaxSuccess, myAjaxFail} from '../../common/js/utils'

function test() {
  async function async1() {
    console.log('async start')
    const a1 = await myAjaxSuccess()
    console.log(a1)
    const a2 = await myAjaxSuccess()
    console.log(a2)
    console.log('async end')
  }

  async1()
}

function test3() {
  async function async1() {
    console.log('async start')
    const a1 = await myAjaxFail()
    console.log(a1)
    const a2 = await myAjaxFail()
    console.log(a2)
    console.log('async end')
  }

  async1()
}

function test4() {
  async function async1() {
    console.log('async start')
    let a1
    try {
      a1 = await myAjaxFail()
    } catch(error) {
      console.log('error:', error)
    }
    console.log(a1)
    const a2 = await myAjaxSuccess()
    console.log(a2)
    console.log('async end')
  }

  async1()
}

function test2() {
  async function async1() {
    console.log('async start')
    await myAsync()
    console.log('async end')
  }

  async function myAsync() {
    console.log('myAsync')
  }

  async1()
}

class JsAsync extends React.Component {
  render() {
    return (
      <div role="containers:JsAsync">
        <h2>串行成功</h2>
        <button onClick={test}>测试</button>

        <h2>串行失败</h2>
        <button onClick={test3}>测试</button>

        <h2>先失败，后成功</h2>
        <button onClick={test4}>测试</button>

        <h2>async同步的地方</h2>
        <button onClick={test2}>测试</button>
      </div>
    )
  }
}

export default JsAsync
