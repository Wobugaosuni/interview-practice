import React from 'react'

export default class MultipleLineEllipsis extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // 是否超出
      isBeyond: false,
      // 展开的状态
      isOpen: false
    }
  }

  // 判断内容是否超出
  isTextBeyond(text, line) {
    const tempDom = document.createElement('div')
    tempDom.innerHTML = text
    tempDom.style = `height: ${1.5 * line}em; overflow: hidden`

    // 插入元素测量
    document.body.appendChild(tempDom)

    const clientHeight = tempDom.clientHeight
    const scrollHeight = tempDom.scrollHeight

    // 移除元素
    document.body.removeChild(tempDom)

    // 内容超出
    if (scrollHeight > clientHeight) {
      return true
    }

    return false
  }

  componentDidMount() {
    const {text, line} = this.props

    const isBeyond = this.isTextBeyond(text, line || 2)

    // 内容超出，增加 ...
    if (isBeyond) {
      this.setState({
        isBeyond: true
      })
      // multipleLine.classList.add('line-ellipsis')
    }
  }

  render() {
    const {line, className, bgColor} = this.props
    const {isBeyond, isOpen} = this.state

    // 动态添加遮罩层
    if (isBeyond && !isOpen) {
      document.styleSheets[0].insertRule(`.multiple-line-ellipsis::after{background: linear-gradient(to right, transparent, ${bgColor})}`,0) //chrome,firefox等非IE浏览器使用
      // document.styleSheets[0].addRule('...',0) //IE系列浏览器使用
    }

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
