import React from 'react'
import {observer} from 'mobx-react'

import Store from './store'
import './index.styl'
import Pure from './pure'

@observer
class PureComponent extends React.Component {
  state = {
    items: [1, 2, 3]
  }

  handleClick = () => {
    const { items } = this.state
    items.pop()

    // 易变数据不能使用一个引用，否则 pureComponent 监听不到变化！！！
    // this.setState({ items: items })
    this.setState({ items: [].concat(items) })
  }

  render() {
    const {items} = this.state

    return (
      <div>
        <Pure items={items} />
        <button onClick={this.handleClick}>delete</button>
      </div>
    )
  }
}

export default PureComponent
