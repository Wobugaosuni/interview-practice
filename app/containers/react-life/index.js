import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'

class ReactLife extends React.Component {
  constructor(props) {
    super(props)
    alert('constructor')

    this.state = {
      count: 1,
    }
  }

  // 初始挂载和更新都会触发
  static getDerivedStateFromProps(props, state) {
    alert('getDerivedStateFromProps')

    return null
  }

  // 类似willUpdate
  getSnapshotBeforeUpdate() {
    alert('getSnapshotBeforeUpdate')

    return null
  }

  shouldComponentUpdate() {
    alert('shouldComponentUpdate')
    return true
  }

  componentDidMount() {
    alert('componentDidMount')
  }

  componentDidUpdate() {
    alert('componentDidUpdate')
  }

  componentWillUnmount() {
    alert('componentWillUnmount')
  }

  render() {
    alert('render')
    return (
      <div role="containers:ReactLife">
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({count: ++this.state.count})}>count</button>
      </div>
    )
  }
}

export default ReactLife
