import React from 'react'
import { storiesOf } from '@storybook/react'

import SvgBigData from '../containers/svg-bigData'
import svgBigDataMd from '../containers/svg-bigData/index.md'

import Svg from '../containers/svg'
import SvgMd from '../containers/svg/index.md'

import SvgPie from '../containers/svg-pie'
import svgPieMd from '../containers/svg-pie/index.md'

storiesOf('可视化', module)
  .add('大数据渲染', () => <SvgBigData />, {
    info: {
      text: svgBigDataMd,
      propTablesExclude: [SvgBigData]
    }
  })

storiesOf('可视化', module)
  .add('svg?', () => <Svg />, {
    info: {
      inline: true,
      text: SvgMd,
      propTablesExclude: [Svg]
    }
  })

// storiesOf('可视化', module)
//   .add('21分钟精通画饼图', () => <SvgPie />, {
//     info: {
//       inline: true,
//       text: svgPieMd,
//       propTablesExclude: [SvgPie]
//     }
//   })