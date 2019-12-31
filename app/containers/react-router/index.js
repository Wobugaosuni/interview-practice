import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'
import HashRouter from './router-hash'
import HistoryRouter from './router-history'

const colors = ['red', 'green', 'yellow', 'purple', 'pink', 'black']

class ReactRouter extends React.Component {
  constructor(props) {
    super(props)

    // this.hashRoute()
    this.historyRoute()
  }

  hashRoute() {
    this.ulRefs = React.createRef()

    this.hashRouter = new HashRouter()

    // 绑定路由
    colors.forEach(item => {
      this.hashRouter.routes(`#/${item}`, () => this.changeBg(item, this.ulRefs.current))
    })
  }

  historyRoute() {
    this.ulRefs2 = React.createRef()

    this.historyRouter = new HistoryRouter()

    // 绑定路由
    colors.forEach(item => {
      this.historyRouter.routes(`/${item}`, () => this.changeBg(item, this.ulRefs2.current))
    })


    // 初始化路由
    // this.historyRouter.init(location.pathname)

    console.log('this.historyRouter:', this.historyRouter)
  }

  changeBg(color, node) {
    node.style.backgroundColor = color
  }

  render() {
    return (
      <div role="containers:ReactRouter">
        <h2>Hash</h2>
        <button onClick={() => this.hashRoute()}>测试</button>
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

        <h2>history</h2>
        <ul ref={this.ulRefs2}>
          {
            colors.map(item => (
              <li key={item} className="hand" onClick={e => {
                // console.log('e onClick:', e.target.tagName)
                if (e.target.tagName === 'A') {
                  e.preventDefault()
                  this.historyRouter.go(e.target.getAttribute('href'))
                }
              }}>
                <a href={`/${item}`}>{item}</a>
              </li>
            ))
          }
        </ul>
        <button onClick={() => history.back()}>回退</button>
        <button onClick={() => history.forward()}>前进</button>
      </div>
    )
  }
}

export default ReactRouter
