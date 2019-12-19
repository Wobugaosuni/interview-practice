import React, { useState, useMemo } from 'react'

export default function Child(props) {
  console.log('hooks下组件更新了:', props)

  return (
    <div>{props.value}</div>
  )
}
