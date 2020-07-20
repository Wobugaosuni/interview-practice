import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

// import './index.styl'
import '../../common/stylus/base.styl'

// import {getData} from './util'

class Svg extends React.Component {
  constructor(props) {
    super(props)

    // this.data = getData()
  }

  render() {
    return (
      <div role="containers:Svg">
        {/* <h2>可视化</h2> */}

        <div id="containerSvg"></div>
        {/* <svg id="board" preserveAspectRatio="xMidYMid meet" height="100vh" width="100vw" viewBox="0,0,2000,700">
        </svg> */}
      </div>
    )
  }
}

export default Svg
