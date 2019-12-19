import React from 'react'

export default function test(props) {
  console.log('纯函数点击更新：', props.times)
  return (
    <div>{props.times}</div>
  )
}