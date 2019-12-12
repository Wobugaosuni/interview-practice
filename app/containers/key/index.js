import React from 'react'
import {observer} from 'mobx-react'

import Store from './store'
import './index.styl'

function Demo(props) {
  // 访问不到组件的key
  // console.log('props.key:', props.key)
  return (
    <div>{props.value}</div>
  )
}

@observer
class Key extends React.Component {
  localCounter = 1
  
  constructor(props) {
    super(props)
    this.state = {
      list: [1, 2, 3, 4],
      list2: [{
        key: this.localCounter++,
        value: 1
      }, {
        key: this.localCounter++,
        value: 2
      }, {
        key: this.localCounter++,
        value: 3
      }, {
        key: this.localCounter++,
        value: 4
      }]
    }
  }

  addFrontClick() {
    this.state.list.unshift(0)
    this.setState({
      list: this.state.list
    })
  }
  
  addEndClick() {
    this.state.list.push(5)
    this.setState({
      list: this.state.list
    })
  }

  addFrontClick2() {
    const key = this.localCounter++

    this.state.list2.unshift({key: key, value: 0})
    this.setState({
      list2: this.state.list2
    })
  }
  
  addEndClick2() {
    const key = this.localCounter++

    const {list2} = this.state

    list2.push({key: key, value: 5})
    this.setState({
      list2
    })
  }

  render() {
    return (
      <div role="containers:Key">
        <h2>相同的key 会报 warning，且子组件是访问不到key的。</h2>
        <ul>
          {/* {
            [1, 1, 2, 2].map((item, index) => <Demo key={item} value={item + '-' + index} />)
          } */}
        </ul>

        <h2>在数组前后插入元素，key是不稳定的</h2>
        <ul>
          {
            this.state.list.map((item, index) => <li key={index}>{item}</li>)
          }
          <button onClick={this.addFrontClick.bind(this)}>在前插入</button>
          <button onClick={this.addEndClick.bind(this)}>在后插入</button>
        </ul>

        <h2>在数组前后插入元素，key是稳定的的</h2>
        <ul>
          {
            this.state.list2.map((item) => <li key={item.key}>{item.value}</li>)
          }
          <button onClick={this.addFrontClick2.bind(this)}>在前插入</button>
          <button onClick={this.addEndClick2.bind(this)}>在后插入</button>
        </ul>
      </div>
    )
  }
}

export default Key
