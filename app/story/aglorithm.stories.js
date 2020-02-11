import React from 'react'
import { storiesOf } from '@storybook/react'

import Rob from '../containers/aglorithm-rob'
import robMd from '../containers/aglorithm-rob'

import ListNode from '../containers/listNode'
import listNodeMd from '../containers/listNode/index.md'

storiesOf('Aglorithm', module)
  .add('链表', () => <ListNode />, {
    info: {
      text: listNodeMd,
      propTablesExclude: [ListNode]
    }
  })

storiesOf('Aglorithm', module)
  .add('打家劫舍-动态规划', () => <Rob />, {
    info: {
      text: robMd,
      propTablesExclude: [Rob]
    }
  })
  
