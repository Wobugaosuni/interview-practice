import React from 'react'
import { storiesOf } from '@storybook/react'

import TreeNode from '../containers/treeNode'
import treeNodeMd from '../containers/treeNode/index.md'

storiesOf('treeNode', module)
  .add('treeNode', () => <TreeNode />, {
    info: {
      text: treeNodeMd,
      propTablesExclude: [TreeNode]
    }
  })
