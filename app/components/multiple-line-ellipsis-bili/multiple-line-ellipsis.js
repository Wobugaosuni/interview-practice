import React from 'react'

export default class MultipleLineEllipsisBili extends React.Component {
  constructor(props) {
    super(props)

    this.biliRef = React.createRef()

    this.state = {
      // 是否超出
      isBeyond: false,
      // 展开的状态
      isOpen: false
    }
  }

  // 判断内容是否超出
  isTextBeyond(text) {
    const tempDom = document.createElement('div')
    tempDom.innerHTML = text
    tempDom.style = 'height: 60px; overflow: hidden; line-height: 24px'

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
    const {text} = this.props
    const isBeyond = this.isTextBeyond(text)

    // 内容超出，增加 ...
    if (isBeyond) {
      this.setState({
        isBeyond: true
      })
    }
  }

  render() {
    const {text} = this.props
    const {isBeyond, isOpen} = this.state

    return (
      <React.Fragment>
        <div
          ref={this.biliRef}
          style={{
            height: !isBeyond || isOpen ? 'auto' : '60px',
            lineHeight: '24px',
            overflow: 'hidden'
          }}
        >
          {text}
        </div>
        {
          isBeyond ? (
            <button onClick={() => this.setState({isOpen: !isOpen})} className="mt12">
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

