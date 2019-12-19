import React from 'react'
import { storiesOf } from '@storybook/react'
import '@storybook/addon-notes/register'

import PureComponent from '../containers/pureComponent'
import md from '../containers/pureComponent/pureComponent.md'

storiesOf('React', module)
  .add('PureComponent', () => <PureComponent />, {
    info: {
      text: md,
      propTablesExclude: [PureComponent]
    }
  })

