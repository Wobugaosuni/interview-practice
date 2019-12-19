import React, { useState, useEffect } from 'react'

function mouseHooks(props) {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [isMove, setIsMove] = useState(false)

  return (
    <div 
      onMouseMove={(event) => {
        setX(event.clientX)
        setY(event.clientY)
      }} 
      onMouseEnter={() => setIsMove(true)} 
      onMouseLeave={() => setIsMove(false)}
      style={{...props.style}}
    >
      {/* ...但我们如何渲染 <p> 以外的东西? */}
      <p>The current mouse position is ({x}, {y})</p>
      {
        props.children({x, y, isMove})
      }
    </div>
  )
}

export default mouseHooks