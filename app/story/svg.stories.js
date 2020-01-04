import React from 'react'
import { storiesOf } from '@storybook/react'

import Svg from '../containers/svg'
import svgMd from '../containers/svg/index.md'

storiesOf('Svg', module)
  .add('大数据渲染', () => <Svg />, {
    info: {
      text: svgMd,
      propTablesExclude: [Svg]
    }
  })