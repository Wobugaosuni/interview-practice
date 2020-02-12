import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'

class CssStickyFooter extends React.Component {
  render() {
    return (
      <div role="containers:CssStickyFooter">
        <div className="container">
          <div className="content">
            <div className="test"></div>
          </div>
          <div className="footer">footer</div>
        </div>
      </div>
    )
  }
}

export default CssStickyFooter
