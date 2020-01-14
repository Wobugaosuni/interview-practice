import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'
import png1 from './1.png'

import {lengthOfLongestSubstring, childsOfLongestSubstring} from './util'

const str = 'asdfgihgjklmnb'

class JsString extends React.Component {
  render() {
    return (
      <div role="containers:JsString">
        <h2>无重复字符的最长子串</h2>
        <img width="500" src={png1} />
        <div>字符串：{str}</div>
        <button onClick={() => childsOfLongestSubstring(str)}>测试</button>
      </div>
    )
  }
}

export default JsString
