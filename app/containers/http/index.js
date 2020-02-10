import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'
import png1 from './1.png'
import png2 from './2.png'

class Http extends React.Component {
  render() {
    return (
      <div role="containers:Http">
        {/* <h2>1. http header 有哪些内容</h2> */}
        <img width={600} src={png1} />
        <img width={600} src={png2} />
      </div>
    )
  }
}

export default Http
