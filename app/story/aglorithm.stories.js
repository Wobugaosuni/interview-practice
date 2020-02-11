import React from 'react'
import { storiesOf } from '@storybook/react'

import Rob from '../containers/aglorithm-rob'
import robMd from '../containers/aglorithm-rob/index.md'

import ListNode from '../containers/aglorithm-listNode'
import listNodeMd from '../containers/aglorithm-listNode/index.md'

import SymbolIsValid from '../containers/aglorithm-symbol-isValid'
import isValidMd from '../containers/aglorithm-symbol-isValid/index.md'

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

storiesOf('Aglorithm', module)
  .add('有效的括号', () => <SymbolIsValid />, {
    info: {
      text: isValidMd,
      propTablesExclude: [SymbolIsValid]
    }
  })
  
