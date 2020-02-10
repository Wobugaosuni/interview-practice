import React from 'react'
import { storiesOf } from '@storybook/react'

import HttpE from '../containers/http'
import httpMd from '../containers/http/index.md'

storiesOf('Http', module)
  .add('http', () => <HttpE />, {
    info: {
      inline: true,
      text: httpMd,
      propTablesExclude: [HttpE]
    }
  })
