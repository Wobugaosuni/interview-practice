import React from 'react'
import { storiesOf } from '@storybook/react'

import TreeNode from '../containers/aglorithm-treeNode'
import treeNodeMd from '../containers/aglorithm-treeNode/index.md'

import Oorder from '../containers/aglorithm-treeNode/order'
import OrderMd from '../containers/aglorithm-treeNode/order.md'

storiesOf('Aglorithm-treeNode', module)
  .add('treeNode', () => <TreeNode />, {
    info: {
      text: treeNodeMd,
      propTablesExclude: [TreeNode]
    }
  })

storiesOf('Aglorithm-treeNode', module)
  .add('前中后序遍历', () => <Oorder />, {
    info: {
      text: OrderMd,
      propTablesExclude: [Oorder]
    }
  })
