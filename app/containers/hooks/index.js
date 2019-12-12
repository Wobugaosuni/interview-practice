import React from 'react'
import './index.styl'

import DidMount from './didMount'
import Clear from './clear'

class Hooks extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    showTimer: true
  }

  render() {
    return (
      <div role="containers:Hooks">
        <h2>Hooks DidMount 时机</h2>
        <DidMount />

        <h2>Hooks 执行清理的操作</h2>
        {
          this.state.showTimer ? <Clear /> : <div>已清除</div>
        }
        <button onClick={() => this.setState({showTimer: false})}>清除定时器</button>
      </div>
    )
  }
}

export default Hooks
