import React, { Component } from 'react'
import Auth from './example2-auth'

@Auth
export default class Button extends Component {
  render() {
    // const {auth, authList} = this.props

    return (
      <button>增加用户</button>
    )
  }
}