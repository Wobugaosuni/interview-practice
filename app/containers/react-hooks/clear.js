import React, { useState, useEffect } from 'react'
  
export default function Child() {
  const [count, setCount] = useState(0)
  let timer = null

  const setTimer = () => {
    timer = setInterval(() => {
      setCount(count + 1)
    }, 1000)
  }

  const clearTimer = () => {
    clearInterval(timer)
    console.log('timer:', timer)
    console.log('count:', count)
  }

  useEffect(() => {
    setTimer()

    return clearTimer
  })

  return (
    <div>
      <p>{count} times</p>
    </div>
  )
}