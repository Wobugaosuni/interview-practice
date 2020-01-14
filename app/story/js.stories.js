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

import JsProxy from '../containers/js-proxy'
import ProxyMd from '../containers/js-proxy/index.md'

import JsAsync from '../containers/js-async'
import AsyncMd from '../containers/js-async/index.md'

import JsString from '../containers/js-string'

storiesOf('Js', module)
  .add('Async...await', () => <JsAsync />, {
    info: {
      text: AsyncMd,
      propTablesExclude: [JsAsync]
    }
  })

storiesOf('Js', module)
  .add('Proxy', () => <JsProxy />, {
    info: {
      text: ProxyMd,
      propTablesExclude: [JsProxy]
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

storiesOf('Js', module)
  .add('字符串相关', () => <JsString />, {
    info: {
      text: '',
      propTablesExclude: [JsString]
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
