import React from 'react'
import { storiesOf } from '@storybook/react'

import TreeNode from '../containers/treeNode'
import treeNodeMd from '../containers/treeNode/index.md'

import Oorder from '../containers/treeNode/order'
import OrderMd from '../containers/treeNode/order.md'

storiesOf('treeNode', module)
  .add('treeNode', () => <TreeNode />, {
    info: {
      text: treeNodeMd,
      propTablesExclude: [TreeNode]
    }
  })

storiesOf('treeNode', module)
  .add('前中后序遍历', () => <Oorder />, {
    info: {
      text: OrderMd,
      propTablesExclude: [Oorder]
    }
  })
