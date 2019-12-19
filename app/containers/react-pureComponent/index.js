import React from 'react'
import {observer} from 'mobx-react'

import Store from './store'
// import './index.styl'
import Pure from './pure'
import PureObj from './pureObj'
import Fun from './fun'
import PureFun from './fun-pure'

@observer
class PureComponent extends React.Component {
  localCounter = 4
  localCounter2 = 1
  state = {
    items: [1, 2, 3],
    itemsObj: [{
      key: this.localCounter2++,
      value: 1
    }, {
      key: this.localCounter2++,
      value: 2
    }, {
      key: this.localCounter2++,
      value: 3
    }],

    times: 0,
    times2: 0
  }

  handleClick = () => {
    const { items } = this.state
    items.pop()
    items.push(this.localCounter++)

    // 易变数据不能使用一个引用，否则 pureComponent 监听不到变化！！！
    // this.setState({ items: items })
    this.setState({ items: [].concat(items) })
  }

  handleClick2 = () => {
    const { itemsObj } = this.state
    const value = this.localCounter2++
    itemsObj.pop()
    itemsObj.push({
      key: value,
      value: value
    })

    this.setState({ itemsObj: [].concat(itemsObj) })
  }

  handleClick3 = () => {
    this.setState({times: 1})
  }
  handleClick4 = () => {
    this.setState({times2: 1})
  }

  render() {
    const {items, itemsObj, times, times2} = this.state

    return (
      <div role="containers:PureComponent">
        <h2>一层数组更新</h2>
        <Pure items={items} />
        <button onClick={this.handleClick}>update</button>

        <h2>对象数组更新</h2>
        <PureObj items={itemsObj} />
        <button onClick={this.handleClick2}>update</button>

        <h2 className="mt40">点击纯函数更新，props一样还是会触发</h2>
        <Fun times={times} />
        <button onClick={this.handleClick3}>update</button>

        <h2 className="mt40">点击pureComponent更新，props一样不会触发</h2>
        <PureFun times={times2} />
        <button onClick={this.handleClick4}>update</button>
      </div>
    )
  }
}

export default PureComponent
