import React from 'react'
import { storiesOf } from '@storybook/react'

import ListNode from '../containers/listNode'
import listNodeMd from '../containers/listNode/index.md'

storiesOf('listNode', module)
  .add('listNode', () => <ListNode />, {
    info: {
      text: listNodeMd,
      propTablesExclude: [ListNode]
    }
  })
