import React from 'react'

class PureComponent extends React.PureComponent {
  render() {
    const {times} = this.props
    console.log('PureComponent点击更新：', times)

    return (<div>
      {times}
    </div>)
  }
}

export default PureComponent
