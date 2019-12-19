import React from 'react'

class Child extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.value !== this.props.value
  }

  render() {
    const {value} = this.props
    console.log('class下组件更新了:', value)

    return (
      <div>
        {value}
      </div>
    )
  }
}

export default Child