import React from 'react'
import { storiesOf } from '@storybook/react'
import '@storybook/addon-notes/register'

import PureComponent from '../containers/react-pureComponent'
import Hooks from '../containers/react-hooks'

import pureComponentMd from '../containers/react-pureComponent/index.md'
import hooksMd from '../containers/react-hooks/index.md'

storiesOf('React', module)
  .add('PureComponent', () => <PureComponent />, {
    info: {
      text: pureComponentMd,
      propTablesExclude: [PureComponent]
    }
  })
  
storiesOf('React', module)
  .add('Hooks', () => <Hooks />, {
    info: {
      text: hooksMd,
      propTablesExclude: [Hooks]
    }
  })

