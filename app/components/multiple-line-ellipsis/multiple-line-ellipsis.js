import React from 'react'

import {throttle} from '../../common/js/utils'

export default class MultipleLineEllipsis extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // 是否超出
      isBeyond: false,
      // 展开的状态
      isOpen: false
    }

    this.throttleFun = throttle(() => {
      // 监听内容是否超出
      this.isContentBeyond()

    }, 500)
  }

  isContentBeyond() {
    const multipleLine = this.refs.multipleLine
    const clientHeight = multipleLine.clientHeight
    const scrollHeight = multipleLine.scrollHeight

    // console.log('clientHeight:', clientHeight)
    // console.log('scrollHeight:', scrollHeight)

    // 内容超出，增加 ...
    if (scrollHeight > clientHeight) {
      this.setState({
        isBeyond: true
      })
    } else {
      this.setState({
        isBeyond: false
      })
    }
  }



  componentDidMount() {
    this.isContentBeyond()

    window.addEventListener('resize', this.throttleFun, false)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.throttleFun)
  }

  render() {
    const {line, className, bgColor} = this.props
    const {isBeyond, isOpen} = this.state

    // 动态添加遮罩层
    if (isBeyond && !isOpen) {
      document.styleSheets[0].insertRule(`.multiple-line-ellipsis::after{background: linear-gradient(to right, transparent, ${bgColor})}`,0) //chrome,firefox等非IE浏览器使用
      // document.styleSheets[0].addRule('...',0) //IE系列浏览器使用
    }

    console.log('isBeyond:', isBeyond)

    return (
      <React.Fragment>
        <div
          ref="multipleLine"
          className={`multiple-line-ellipsis ${isBeyond && !isOpen ? 'line-ellipsis' : ''} ${className}`}
          style={{
            height: isOpen ? 'auto' : `${1.5 * (line || 2)}em` // 默认两行
          }}
        >
          {this.props.text}
        </div>
        {
          isBeyond ? (
            <button onClick={() => this.setState({isOpen: !isOpen})}>
              {
                isOpen ? '缩起' : '展开'
              }
            </button>
          ) : ''
        }
      </React.Fragment>
    )
  }
}

