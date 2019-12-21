import React from 'react'
import { storiesOf } from '@storybook/react'

import JsPromise from '../containers/js-promise'
import PromiseMd from '../containers/js-promise/index.md'

import JsArray from '../containers/js-array'
import ArrayMd from '../containers/js-array/index.md'

storiesOf('Js', module)
  .add('Promise', () => <JsPromise />, {
    info: {
      text: PromiseMd,
      propTablesExclude: [JsPromise]
    }
  })

storiesOf('Js', module)
  .add('数组相关', () => <JsArray />, {
    info: {
      text: ArrayMd,
      propTablesExclude: [JsArray]
    }
  })
