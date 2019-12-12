import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from '../containers/Home'
import Es2020 from '../containers/es2020'
import Key from '../containers/key'
import SetState from '../containers/setState'
import PureCompoent from '../containers/pureComponent'
import Hooks from '../containers/hooks'

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/es2020" component={Es2020} />
          <Route path="/key" component={Key} />
          <Route path="/setState" component={SetState} />
          <Route path="/pureCompoent" component={PureCompoent} />
          <Route path="/hooks" component={Hooks} />
        </Switch>
      </Router>
    )
  }
}
