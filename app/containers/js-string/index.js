import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'
import png1 from './1.png'
import png2 from './2.png'

import {lengthOfLongestSubstring, childsOfLongestSubstring, longestCommonPrefix} from './util'

const str = 'asdfgihgjklmnb'

class JsString extends React.Component {
  render() {
    return (
      <div role="containers:JsString">
        <h2>1. 无重复字符的最长子串</h2>
        <img width="500" src={png1} />
        <div>字符串：{str}</div>
        <button onClick={() => lengthOfLongestSubstring(str)}>测试</button>

        <h2>延伸：无重复字符的子串组合</h2>
        <div>字符串：{str}</div>
        <button onClick={() => childsOfLongestSubstring(str)}>测试</button>

        <h2>2. 最长公共前缀</h2>
        <img width="300" src={png2} />
        <button onClick={() => longestCommonPrefix(["flower","flow","flight"])}>测试</button>
      </div>
    )
  }
}

export default JsString
