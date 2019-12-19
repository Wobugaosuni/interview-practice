import React from 'react'

class PureComponent extends React.PureComponent {
  componentDidMount() {
    console.log('PureComponent did mount')
  }

  componentWillUnmount() {
    console.log('PureComponent will unmount')
  }

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
