import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'
import png1 from './1.png'
import {isValid, isValid2} from './util'

class AglorithmSymbolIsValid extends React.Component {
  render() {
    return (
      <div role="containers:AglorithmSymbolIsValid">
        <h2>有效的括号</h2>
        <img src={png1} width={500} />
        <button onClick={() => isValid("()")}>测试1</button>
        <button onClick={() => isValid("()[]{}")}>测试1</button>
        <button onClick={() => isValid("(]")}>测试1</button>
        <button onClick={() => isValid("([)]")}>测试1</button>
        <button onClick={() => isValid("{[]}")}>测试1</button>

        <button onClick={() => isValid2("()")}>暴力</button>
        <button onClick={() => isValid2("()[]{}")}>暴力</button>
        <button onClick={() => isValid2("(]")}>暴力</button>
        <button onClick={() => isValid2("([)]")}>暴力</button>
        <button onClick={() => isValid2("{[]}")}>暴力</button>
      </div>
    )
  }
}

export default AglorithmSymbolIsValid
