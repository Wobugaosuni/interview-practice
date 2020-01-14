import React from 'react'
import { storiesOf } from '@storybook/react'

import Flex from '../containers/css-flex'
import flexMd from '../containers/css-flex/index.md'

storiesOf('Css', module)
  .add('flexbox', () => <Flex />, {
    info: {
      text: flexMd,
      propTablesExclude: [Flex]
    }
  })