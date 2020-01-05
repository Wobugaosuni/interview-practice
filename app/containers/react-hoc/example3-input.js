import React, { Component } from 'react'
import proxyHoc from './example3-proxyHoc'

@proxyHoc
export default class Input extends Component {
  render() {
    return <input {...this.props}></input>
  }
}