import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return {hasError: true}
  }
  
  // componentDidCatch(error, errorInfo) {
  //   // Catch errors in any components below and re-render with error message
  //   this.setState({
  //     hasError: error,
  //     errorInfo: errorInfo
  //   })
  //   // You can also log error messages to an error reporting service here
  // }

  render() {
    if (this.state.hasError) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.hasError && this.state.hasError.toString()}
            <br />
            {/* {this.state.errorInfo.componentStack} */}
          </details>
        </div>
      )
    }
    // Normally, just render children
    return this.props.children
  }
}