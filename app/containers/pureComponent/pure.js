import React from 'react'

class PureComponent extends React.PureComponent {
  render() {
    const {items} = this.props

    return (<div>
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>)
  }
}

export default PureComponent
