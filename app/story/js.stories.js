import React from 'react'
import { storiesOf } from '@storybook/react'

import Promise from '../containers/js-promise'
import PromiseMd from '../containers/js-promise/index.md'

storiesOf('Js', module)
  .add('Promise', () => <Promise />, {
    info: {
      text: PromiseMd,
      propTablesExclude: [Promise]
    }
  })
