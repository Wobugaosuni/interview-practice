import React from 'react'
import { storiesOf } from '@storybook/react'

import JsPromise from '../containers/js-promise'
import PromiseMd from '../containers/js-promise/index.md'

import JsArray from '../containers/js-array'
import ArrayMd from '../containers/js-array/index.md'

import JsCommonJS from '../containers/commonJS'
import CommonMd from '../containers/commonJS/index.md'

import JsWorker from '../containers/js-worker'
import WorkerMd from '../containers/js-worker/index.md'

import JsPrototype from '../containers/js-prototype'
import PrototypeMd from '../containers/js-prototype/index.md'

storiesOf('Js', module)
  .add('Promise', () => <JsPromise />, {
    info: {
      text: PromiseMd,
      propTablesExclude: [JsPromise]
    }
  })

storiesOf('Js', module)
  .add('Prototype', () => <JsPrototype />, {
    info: {
      text: PrototypeMd,
      propTablesExclude: [JsPrototype]
    }
  })

storiesOf('Js', module)
  .add('数组相关', () => <JsArray />, {
    info: {
      text: ArrayMd,
      propTablesExclude: [JsArray]
    }
  })

storiesOf('Js', module)
  .add('commonJS与ES6', () => <JsCommonJS />, {
    info: {
      text: CommonMd,
      propTablesExclude: [JsCommonJS]
    }
  })

storiesOf('Js', module)
  .add('web worker', () => <JsWorker />, {
    info: {
      text: WorkerMd,
      propTablesExclude: [JsWorker]
    }
  })
