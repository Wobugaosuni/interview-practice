import React from 'react'
import { storiesOf } from '@storybook/react'

import Flex from '../containers/css-flex'
import flexMd from '../containers/css-flex/index.md'

import Ellipsis from '../containers/css-ellipsis'
import ellipsisMd from '../containers/css-ellipsis/index.md'

storiesOf('Css', module)
  .add('flexbox', () => <Flex />, {
    info: {
      text: flexMd,
      propTablesExclude: [Flex]
    }
  })

storiesOf('Css', module)
  .add('ellipsis', () => <Ellipsis />, {
    info: {
      text: ellipsisMd,
      propTablesExclude: [Ellipsis]
    }
  })