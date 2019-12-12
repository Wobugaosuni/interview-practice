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
      <div role="containers:Home" style={{display: 'flex', flexDirection: 'column'}}>
        <Link to="/es2020">es2020</Link>
        <Link to="/key">key</Link>
        <Link to="/setState">setState</Link>
        <Link to="/pureCompoent">pureCompoent</Link>
        <Link to="/hooks">hooks</Link>
      </div>
    )
  }

}

export default Home
