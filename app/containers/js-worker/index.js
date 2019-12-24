import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'

class JsWorker extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  onBtn1Click() {
    const startTime = +new Date()
    let total = 1

    setTimeout(() => {
      console.log(`一秒后的定时器，实际延时了 ${+new Date() - startTime} 毫秒`)
    }, 1000)

    for (let i = 0; i < 5000000000; i++) {
      total += i
    }
    const endTime = +new Date()
    console.log(`计算花费了${endTime - startTime}毫秒，期间页面卡顿`)
    // console.log(total)
  }

  onBtn2Click() {
    if (window.Worker) {
      const myTask = `
        onmessage = function(e) {
          console.log('onmessage:', e)

          if (e.data === 'count') {
            const startTime = +new Date()
            let total = 1

            for (let i = 0; i < 5000000000; i++) {
              total += i
            }
            const endTime = +new Date()

            // 把计算结果传回去
            postMessage({
              total,
              spend: endTime - startTime,
            })

            // 关闭
            this.close()
          }
        }
    `

      const blob = new Blob([myTask])
      // 生成url
      const url = window.URL.createObjectURL(blob)
      const myWorker = new Worker(url)

      // 发送指令进行计算
      myWorker.postMessage('count')

      // 计算完毕，接受结果
      myWorker.onmessage = function (e) {
        console.log('e:', e)
        console.log('计算结果是:', e.data.total) // page: [1, 2, 3, "hello"]
        console.log(`计算花费了${e.data.spend}毫秒，期间页面不卡顿`)
      }

    }
  }

  onBtn3Click() {
    if (window.Worker) {
      const myTask = `
        onmessage = function (e) {
          // 没有 window 对象
          // console.log('window:', window) // window is not defined

          // this 的指向：DedicatedWorkerGlobalScope
          console.log('this:', this)

          // 关闭
          this.close()
        }
      `

      const blob = new Blob([myTask])
      const url = window.URL.createObjectURL(blob)

      const myWorker = new Worker(url)

      myWorker.postMessage({
        // dom: this.myRef // 不能克隆dom
      })

      myWorker.onmessage = function(e) {

      }
    }
  }

  render() {
    return (
      <div role="containers:JsWorker">
        <h2>点击btn1，需要进行大量运算，页面卡了一段时间</h2>
        <button onClick={this.onBtn1Click}>btn1</button>

        <h2>点击worker，开了单独的线程进行计算，页面不卡了</h2>
        <button onClick={this.onBtn2Click}>worker</button>

        <h2>点击 button 后，输入验证卡不卡</h2>
        <input type="text"></input>

        <h2>worker 测试</h2>
        <div ref={this.myRef}>hello</div>
        <button onClick={() => this.onBtn3Click()}>worker 测试</button>
      </div>
    )
  }
}

export default JsWorker
