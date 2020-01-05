import React, { Component } from 'react'

function auth(WrappedComponent) {
  return class extends Component {
    render() {
      const { auth, authList, display = null, ...props } = this.props
      
      if ((auth && authList.indexOf(auth) === -1)) {
        return display
      }

      return <WrappedComponent {...props} />
    }
  }
}

export default auth