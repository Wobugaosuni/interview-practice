import React from 'react'
import { storiesOf } from '@storybook/react'

import JsPromise from '../containers/js-promise'
import promiseMd from '../containers/js-promise/index.md'

import JsArray from '../containers/js-array'
import arrayMd from '../containers/js-array/index.md'

import JsCommonJS from '../containers/commonJS'
import commonMd from '../containers/commonJS/index.md'

import JsWorker from '../containers/js-worker'
import workerMd from '../containers/js-worker/index.md'

import JsPrototype from '../containers/js-prototype'
import prototypeMd from '../containers/js-prototype/index.md'

import JsProxy from '../containers/js-proxy'
import proxyMd from '../containers/js-proxy/index.md'

import JsAsync from '../containers/js-async'
import asyncMd from '../containers/js-async/index.md'

import JsString from '../containers/js-string'
import stringMd from '../containers/js-string/index.md'

import JsClosure from '../containers/js-closure'
import closureMd from '../containers/js-closure/index.md'

import JsTree from '../containers/js-tree'

import JsPath from '../containers/js-path'
import pathMd from '../containers/js-path/index.md'

import JsObject from '../containers/js-object'
import jsObjectMd from '../containers/js-object/index.md'

import JsPolyfill from '../containers/js-polyfill'
import polyfillMd from '../containers/js-polyfill/index.md'

import JsSetMap from '../containers/js-set-map'
import setMapMd from '../containers/js-set-map/index.md'

storiesOf('Js', module)
  .add('set和map性能', () => <JsSetMap />, {
    info: {
      text: setMapMd,
      propTablesExclude: [JsSetMap]
    }
  })

storiesOf('Js', module)
  .add('polyfill', () => <JsPolyfill />, {
    info: {
      text: polyfillMd,
      propTablesExclude: [JsPolyfill]
    }
  })

storiesOf('Js', module)
  .add('闭包', () => <JsClosure />, {
    info: {
      inline: true,
      text: closureMd,
      propTablesExclude: [JsClosure]
    }
  })

storiesOf('Js', module)
  .add('树结构', () => <JsTree />, {
    info: {
      text: '',
      propTablesExclude: [JsTree]
    }
  })

storiesOf('Js', module)
  .add('路径', () => <JsPath />, {
    info: {
      text: pathMd,
      propTablesExclude: [JsPath]
    }
  })

storiesOf('Js', module)
  .add('Async...await', () => <JsAsync />, {
    info: {
      text: asyncMd,
      propTablesExclude: [JsAsync]
    }
  })

storiesOf('Js', module)
  .add('Proxy', () => <JsProxy />, {
    info: {
      text: proxyMd,
      propTablesExclude: [JsProxy]
    }
  })

storiesOf('Js', module)
  .add('Prototype', () => <JsPrototype />, {
    info: {
      text: prototypeMd,
      propTablesExclude: [JsPrototype]
    }
  })

storiesOf('Js', module)
  .add('Promise', () => <JsPromise />, {
    info: {
      text: promiseMd,
      propTablesExclude: [JsPromise]
    }
  })

storiesOf('Js', module)
  .add('对象相关', () => <JsObject />, {
    info: {
      text: jsObjectMd,
      propTablesExclude: [JsObject]
    }
  })

storiesOf('Js', module)
  .add('数组相关', () => <JsArray />, {
    info: {
      text: arrayMd,
      propTablesExclude: [JsArray]
    }
  })

storiesOf('Js', module)
  .add('字符串相关', () => <JsString />, {
    info: {
      text: stringMd,
      propTablesExclude: [JsString]
    }
  })

storiesOf('Js', module)
  .add('commonJS与ES6', () => <JsCommonJS />, {
    info: {
      text: commonMd,
      propTablesExclude: [JsCommonJS]
    }
  })

storiesOf('Js', module)
  .add('web worker', () => <JsWorker />, {
    info: {
      text: workerMd,
      propTablesExclude: [JsWorker]
    }
  })
