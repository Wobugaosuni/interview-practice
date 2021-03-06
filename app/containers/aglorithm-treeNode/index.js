import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'
import png1 from './1.png'
import png2 from './2.png'
import png3 from './3.png'
import { breadthLevelOrder, deepLevelOrder, zigzagLevelOrder, rightSideView } from './util'

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

const data2 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
    right: {
      val: 5
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
    },
    right: {
      val: 7
    }
  }
}

class TreeNode extends React.Component {
  render() {
    return (
      <div role="containers:TreeNode">
        <h2>遍历二叉树</h2>
        <img src={png1} width={500} />
        <button onClick={() => breadthLevelOrder(data)}>广度优先</button>
        <button onClick={() => deepLevelOrder(data)}>深度优先</button>

        <h2>锯齿形层次遍历</h2>
        <img src={png2} width={500} />
        <button onClick={() => zigzagLevelOrder(data)}>测试</button>
        <button onClick={() => zigzagLevelOrder(data2)}>测试</button>

        <h2>二叉树的右视图</h2>
        <img src={png3} width={500} />
        <button onClick={() => rightSideView(data2, 'right')}>测试</button>
      </div>
    )
  }
}

export default TreeNode
