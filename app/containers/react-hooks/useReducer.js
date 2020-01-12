import React, { useState, useMemo, useReducer } from 'react'

const initialState = 0

function reducer(state, type) {
  switch(type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      throw new Error('unexpected type')
  }
}

export default function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState)
  console.log('count change')

  return (
    <div>
      <p>{count} times</p>
      <button onClick={() => dispatch('increment')}>+1</button>
      <button onClick={() => dispatch('decrement')}>-1</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </div>
  )
}