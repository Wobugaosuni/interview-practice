import React from 'react'

import './index.styl'
import '../../common/stylus/base.styl'
import UseContent from './example1-wrapped'
import Button from './example2-btn'
import Button2 from './example2-btn copy'

const authList = ['addUser']

class ReactHoc extends React.Component {
  render() {
    return (
      <div role="containers:ReactHoc">
        <h2>例子</h2>
        <UseContent />

        <h2>权限控制</h2>
        <Button auth="addUser" authList={authList} />
        <Button2 auth="deleteUser" authList={authList} />
      </div>
    )
  }
}

export default ReactHoc
