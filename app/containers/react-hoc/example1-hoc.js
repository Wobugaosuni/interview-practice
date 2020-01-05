import React, { Component } from 'react'

const ExampleHoc = WrappedComponent => {
  return class extends Component {
    constructor(props) {
        super(props)
        this.state = {
         title: 'hoc-component',
         name: 'arcsin1',
        }
    }

    componentDidMount() {
      console.log('hoc didMount')
    }

    render() {
       const newProps = {
        ...this.state,
       }
       console.log('hoc render')
       return <WrappedComponent {...this.props} {...newProps} />
    }
  }
}
export default ExampleHoc
