import React from 'react';
import {observer} from 'mobx-react';

import './index.styl';
import '../../common/stylus/base.styl'

@observer
class SetState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      val: 0,
      val2: 0,
      val3: 0,
      count: 1
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    if (this.state.count === nextState.count) {
      return false
    }
    return true
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentDidMount() {
    // 钩子事件与批量更新
    this.setState({ val: this.state.val + 1 })
    console.log('1:', this.state.val)

    this.setState({ val: this.state.val + 1 })
    console.log('2:', this.state.val)

    // setTimeout
    setTimeout(_ => {
      this.setState({ val: this.state.val + 1 })
      console.log('3:', this.state.val)

      this.setState({ val: this.state.val + 1 })
      console.log('4:', this.state.val)
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

  render() {
    console.log('render')
    
    return (
      <div role="containers:SetState">
        <h2>SetState Demo</h2>
        <div className="hand" onClick={this.increment2}>
          {`合成事件 Counter is: ${this.state.val2}`}
        </div>
        <div className="hand" ref={el => this.counter = el}>
          {`原生事件 Counter is: ${this.state.val3}`}
        </div>

        <h2>setState后调用的生命周期</h2>
        <span>{this.state.count}</span>
        <button onClick={() => this.setState({count: this.state.count + 1})}>调用</button>
      </div>
    );
  }
}

export default SetState;
