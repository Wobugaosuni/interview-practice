import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'
import png4 from './4.jpeg'
import { preorderTraversal, inorderTraversal } from './util-order'

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

class Order extends React.Component {
  render() {
    return (
      <div role="containers:Order">
        <img src={png4} width={600} />
        <h2>前序遍历</h2>
        <button onClick={() => preorderTraversal(data)}>测试</button>

        <h2>中序遍历</h2>
        <button onClick={() => console.log(inorderTraversal(data2))}>测试</button>
      </div>
    )
  }
}

export default Order
