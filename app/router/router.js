import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from '../containers/Home'
import Es2020 from '../containers/es2020'

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/es2020" component={Es2020} />
        </Switch>
      </Router>
    )
  }
}
