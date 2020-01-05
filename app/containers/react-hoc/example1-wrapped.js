import React, { Component } from 'react'
import ExampleHoc from './example1-hoc'

@ExampleHoc
class UseContent extends Component {
  componentDidMount() {
    console.log('wrapped didMount')
  }

  render() {
    console.log('wrapped render')
    return (
      <div>
        {this.props.title} - {this.props.name}
      </div>
    )
  }
}
export default UseContent
// export default ExampleHoc(UseContent)