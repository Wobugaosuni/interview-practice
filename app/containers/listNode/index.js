import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'
import png1 from './1.png'
import {reverseList} from './util'

class ListNode extends React.Component {
  render() {
    return (
      <div role="containers:ListNode">
        <h2>链表数据结构</h2>
        <img src={png1} width={400} />

        <h2>反转链表</h2>
      </div>
    )
  }
}

export default ListNode
