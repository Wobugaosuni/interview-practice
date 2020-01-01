import React from 'react'
import { storiesOf } from '@storybook/react'

import PureComponent from '../containers/react-pureComponent'
import pureComponentMd from '../containers/react-pureComponent/index.md'

import Hooks from '../containers/react-hooks'
import hooksMd from '../containers/react-hooks/index.md'

import Key from '../containers/react-key'

import RenderProps from '../containers/react-renderProps'

import SetState from '../containers/react-setState'

import Life from '../containers/react-life'
import lifeMd from '../containers/react-life/index.md'

import Router from '../containers/react-router'
import routerMd from '../containers/react-router/index.md'

storiesOf('React', module)
  .add('Router', () => <Router />, {
    info: {
      text: routerMd,
      propTablesExclude: [Router]
    }
  })

storiesOf('React', module)
  .add('Life', () => <Life />, {
    info: {
      text: lifeMd,
      propTablesExclude: [Life]
    }
  })

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

storiesOf('React', module)
  .add('Key', () => <Key />, {
    info: {
      // text: hooksMd,
      propTablesExclude: [Key]
    }
  })

storiesOf('React', module)
  .add('RenderProps', () => <RenderProps />, {
    info: {
      // text: hooksMd,
      propTablesExclude: [RenderProps]
    }
  })

storiesOf('React', module)
  .add('SetState', () => <SetState />, {
    info: {
      // text: hooksMd,
      propTablesExclude: [SetState]
    }
  })

