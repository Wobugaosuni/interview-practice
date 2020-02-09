import React from 'react'

import ErrorB from './error'
import './index.styl'
import '../../common/stylus/base.styl'
import ErrorBoundary from './error'
import BuggyCounter from './counter'

class ReactError extends React.Component {
  render() {
    return (
      <div role="containers:ReactError">
        <p>
          <b>
            This is an example of error boundaries in React 16.
            <br /><br />
            Click on the numbers to increase the counters.
            <br />
            The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
          </b>
        </p>
        <hr />
        <ErrorBoundary>
          <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <hr />
        <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
        <ErrorBoundary><BuggyCounter /></ErrorBoundary>
        <ErrorBoundary><BuggyCounter /></ErrorBoundary> 
      </div>
    )
  }
}

export default ReactError
