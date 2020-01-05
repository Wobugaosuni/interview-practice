import React, { Component } from 'react'

class Form extends Component {
  // static childContextTypes = {
  //   model: PropTypes.object,
  //   changeModel: PropTypes.func
  // }

  constructor(props, context) {
    super(props, context)
    this.state = {
      model: props.model || {}
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.model) {
      this.setState({
        model: nextProps.model
      })
    }
  }

  changeModel = (name, value) => {
    this.setState({
      model: { ...this.state.model, [name]: value }
    })
  }

  getChildContext() {
    return {
      changeModel: this.changeModel,
      model: this.props.model || this.state.model
    }
  }

  onSubmit = () => {
    console.log(this.state.model)
  }

  render() {
    return <div>
      {this.props.children}
      <button onClick={this.onSubmit}>提交</button>
    </div>
  }
}

export default Form