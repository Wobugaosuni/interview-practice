import React from 'react'
import './index.styl'

import Child from './child'

class Hooks extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div role="containers:Hooks">
        <h2>Hooks</h2>
        <Child />
      </div>
    )
  }
}

export default Hooks
