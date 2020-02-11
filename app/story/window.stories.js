import React from 'react'
import { storiesOf } from '@storybook/react'

import WindowE from '../containers/window'
import windowMd from '../containers/window/index.md'

storiesOf('Window', module)
  .add('window', () => <WindowE />, {
    info: {
      inline: true,
      text: windowMd,
      propTablesExclude: [WindowE]
    }
  })
