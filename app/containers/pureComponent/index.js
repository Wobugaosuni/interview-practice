import React from 'react'
import {observer} from 'mobx-react'

import Store from './store'
import './index.styl'
import Pure from './pure'
import PureObj from './pureObj'

@observer
class PureComponent extends React.Component {
  localCounter = 1
  state = {
    items: [1, 2, 3],
    itemsObj: [{
      key: this.localCounter++,
      value: 1
    }, {
      key: this.localCounter++,
      value: 2
    }, {
      key: this.localCounter++,
      value: 3
    }]
  }

  handleClick = () => {
    const { items } = this.state
    items.pop()
    items.push(4)

    // 易变数据不能使用一个引用，否则 pureComponent 监听不到变化！！！
    // this.setState({ items: items })
    this.setState({ items: [].concat(items) })
  }

  handleClick2 = () => {
    const { itemsObj } = this.state
    const value = this.localCounter++
    itemsObj.pop()
    itemsObj.push({
      key: value,
      value: value
    })

    this.setState({ itemsObj: [].concat(itemsObj) })
  }

  render() {
    const {items, itemsObj} = this.state

    return (
      <div>
        <h2>一层数组</h2>
        <Pure items={items} />
        <button onClick={this.handleClick}>update</button>

        <h2>对象数组</h2>
        <PureObj items={itemsObj} />
        <button onClick={this.handleClick2}>update</button>
      </div>
    )
  }
}

export default PureComponent
