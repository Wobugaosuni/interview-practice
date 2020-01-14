import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'

class CssFlex extends React.Component {
  render() {
    return (
      <div role="containers:CssFlex">
        <h2>flex 1 含义</h2>
        <div className="father">
          <div className="child">item</div>
          <div className="special-child">special-item</div>
          <div className="child">item</div>
        </div>
      </div>
    )
  }
}

export default CssFlex
