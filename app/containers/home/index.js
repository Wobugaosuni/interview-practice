import React from 'react'
import {Link} from 'react-router-dom'
import {observer} from 'mobx-react'

import Store from './store'
import './index.styl'

const store = new Store()

@observer
class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div role="containers:Home">
        <Link to="/es2020">es2020</Link>
      </div>
    )
  }

}

export default Home
