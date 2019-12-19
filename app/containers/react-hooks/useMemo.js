import React, { useState, useMemo } from 'react'
import Child from './useMemo-child'

export default function UseMemo(props) {
  const {a, b} = props

  // Only re-rendered if `a` changes:
  const child1 = useMemo(() => <Child value={a} />, [a])
  // Only re-rendered if `b` changes:
  const child2 = useMemo(() => <Child value={b} />, [b])

  return (
    <div>
      {child1}
      {child2}
    </div>
  )
}
