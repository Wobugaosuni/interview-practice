import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'
import png1 from './1.png'
import { breadthLevelOrder, deepLevelOrder } from './util'

const data = {
  val: 3,
  right:
  {
    val: 20,
    right: { val: 7, right: null, left: null },
    left: { val: 15, right: null, left: null }
  },
  left: { val: 9, right: null, left: null }
}

class TreeNode extends React.Component {
  render() {
    return (
      <div role="containers:TreeNode">
        <h2>遍历二叉树</h2>
        <img src={png1} width={500} />
        <button onClick={() => breadthLevelOrder(data)}>广度优先</button>
        <button onClick={() => deepLevelOrder(data)}>深度优先</button>
      </div>
    )
  }
}

export default TreeNode
