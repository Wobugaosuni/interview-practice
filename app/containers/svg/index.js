import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'
import simpleSvg from './test-simple'
import timeoutSvg from './test-rAF'
import mO from './test-mO'
import canvasTest from './test-canvas'

import {getData} from './util'

class Svg extends React.Component {
  constructor(props) {
    super(props)

    this.data = getData()
  }

  render() {
    return (
      <div role="containers:Svg">
        <h2>正常渲染</h2>
        <button onClick={() => simpleSvg(this.data)}>测试</button>

        <h2>数据分片渲染：requestAnimationFrame</h2>
        <button onClick={() => timeoutSvg(this.data)}>测试</button>

        <h2>数据分片渲染：requestAnimationFrame + MutationObeserver</h2>
        <button onClick={() => mO(this.data)}>测试</button>

        <h2>数据分片渲染：canvas</h2>
        <button onClick={() => canvasTest(this.data)}>测试</button>

        {/* <svg id="board" preserveAspectRatio="xMidYMid meet" height="100vh" width="100vw" viewBox="0,0,2000,700">
        </svg> */}
      </div>
    )
  }
}

export default Svg
