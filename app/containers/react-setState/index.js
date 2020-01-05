import React from 'react'
import {observer} from 'mobx-react'

import './index.styl'
import '../../common/stylus/base.styl'

@observer
class SetState extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      val: 0,
      val2: 0,
      val3: 0,
      count: 0,
      count2: 0,
      count3: 0,
    }
  }

  componentDidMount() {
    // 钩子事件与批量更新
    this.setState({ val: this.state.val + 1 })
    console.log('钩子 批量更新:', this.state.val)

    this.setState({ val: this.state.val + 1 })
    console.log('钩子 批量更新:', this.state.val)

    // setTimeout
    setTimeout(_ => {
      this.setState({ val: this.state.val + 1 })
      console.log('定时 批量更新:', this.state.val)

      this.setState({ val: this.state.val + 1 })
      console.log('定时 批量更新:', this.state.val)
    }, 0)

    // 原生事件
    this.counter.addEventListener('click', this.increment3, false)
  }

  increment2 = () => {
    this.setState({ val2: this.state.val2 + 1 })
    console.log('onclick', this.state.val2) // 输出的是更新前的val --> 0
  }

  increment3 = () => {
    this.setState({ val3: this.state.val3 + 1 })
    console.log('onclick', this.state.val3) // 输出的是更新前的val --> 0
  }

  batchUpdate() {
    this.setState({ count: this.state.count + 1 })
    console.log('第一次 批量更新:', this.state.count)

    this.setState({ count: this.state.count + 1 })
    console.log('第二次 批量更新:', this.state.count)
  }

  batchUpdate2() {
    setTimeout(() => {
      this.setState({ count2: this.state.count2 + 1 })
      console.log('第一次 批量更新:', this.state.count2)

      this.setState({ count2: this.state.count2 + 1 })
      console.log('第二次 批量更新:', this.state.count2)
    })
  }

  render() {    
    return (
      <div role="containers:SetState">
        <h2>SetState Demo</h2>
        <div className="hand" onClick={this.increment2}>
          {`合成事件 Counter is: ${this.state.val2}`}
        </div>
        <div className="hand" ref={el => this.counter = el}>
          {`原生事件 Counter is: ${this.state.val3}`}
        </div>

        <h2>批量更新</h2>
        <div>
          {`Counter is: ${this.state.count}`}
        </div>
        <button onClick={() => this.batchUpdate()}>测试</button>

        <h2>批量更新+定时器</h2>
        <div>
          {`Counter is: ${this.state.count2}`}
        </div>
        <button onClick={() => this.batchUpdate2()}>测试</button>

        <h2>setState传函数</h2>
        <span>{this.state.count3}</span>
        <button onClick={() => {
          this.setState((state) => {
            return {count3: state.count3 + 1}
          })
        }}
        >测试</button>
      </div>
    )
  }
}

export default SetState
