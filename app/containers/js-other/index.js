import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'
import png1 from './1.png'
import {rob} from './util'

class JsOther extends React.Component {
  render() {
    return (
      <div role="containers:JsOther">
        <h2>打家劫舍</h2>
        <img width="600" src={png1} />
        <button onClick={() => console.log(rob([2,7,9,3,1]))}>测试</button>
        <button onClick={() => console.log(rob([2,1,1,2]))}>测试</button>
      </div>
    )
  }
}

export default JsOther
