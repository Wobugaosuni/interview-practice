import React from 'react'
import {observer} from 'mobx-react'

import './index.styl'

@observer
class Es2020 extends React.Component {
  componentDidMount() {
    this.optionalChaining()

    this.nullish()
  }

  optionalChaining() {
    const obj = {
      prop1: {
        prop2: {
          prop3: {
            prop4: {
              prop5: 5,
            },
          },
        },
      },
    }
    console.log('optional:', obj?.prop1?.prop2?.prop3?.prop4?.prop5?.prop6)

    console.log('in:', 'prop2' in obj)
  }

  nullish() {
    const x = 0
    console.log(x ?? 99) // 0

    const y = ''
    console.log(y ?? 99) // ''

    const z = false
    console.log(z ?? 99) // z
  }

  render() {
    return (
      <div role="containers:Es2020">
      </div>
    )
  }
}

export default Es2020
