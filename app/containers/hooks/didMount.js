import React, { useState, useEffect } from 'react'
  
export default function Child() {
  const [count, setCount] = useState(0)

  // 第二个参数传空数组，类似于componentDidMount 和 componentWillUnmount
  useEffect(() => {
    // 模仿异步
    setTimeout(() => {
      setCount(count + 10)
    }, 1000)
  }, [])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}