import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'
import HashRouter from './hash-router'

const colors = ['red', 'green', 'yellow', 'purple', 'pink', 'black']

class ReactRouter extends React.Component {
  constructor(props) {
    super(props)
    this.ulRefs = React.createRef()

    this.hashRouter = new HashRouter()

    // 绑定路由
    colors.forEach(item => {
      this.hashRouter.routes(`#/${item}`, () => this.changeBg(item))
    })
  }

  changeBg(color) {
    this.ulRefs.current.style.backgroundColor = color
  }

  render() {
    return (
      <div role="containers:ReactRouter">
        <h2>Hash</h2>
        <ul ref={this.ulRefs}>
          {
            colors.map(item => (
              <li key={item} className="hand">
                <a href={`#/${item}`}>{item}</a>
              </li>
            ))
          }
        </ul>
        <button onClick={() => this.hashRouter.goBack()}>回退</button>
        <button onClick={() => this.hashRouter.goForward()}>前进</button>
      </div>
    )
  }
}

export default ReactRouter
