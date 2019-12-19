import React from 'react'
import Child from './class-child'

class Update extends React.Component {
  render() {
    const {a, b} = this.props

    return (
      <React.Fragment>
        <Child value={a} />
        <Child value={b}/>
      </React.Fragment>
    )
  }
}

export default Update