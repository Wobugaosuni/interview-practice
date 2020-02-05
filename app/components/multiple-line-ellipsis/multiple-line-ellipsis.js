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
  componentDidMount() {
    const multipleLine = this.refs.multipleLine
    const clientHeight = multipleLine.clientHeight
    const scrollHeight = multipleLine.scrollHeight

    // console.log('multipleLine:', multipleLine)
    // console.log('clientHeight:', clientHeight)
    // console.log('scrollHeight:', scrollHeight)

    // 内容超出，增加 ...
    if (scrollHeight > clientHeight) {
      this.setState({
        isBeyond: true
      })
      // multipleLine.classList.add('line-ellipsis')
    }
  }

  render() {
    // console.log('this.props.text:', this.props.text)
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
            height: line ? (isOpen ? 'auto' : `${1.5 * line}em`) : 'auto',
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

