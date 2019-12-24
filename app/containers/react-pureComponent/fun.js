import React from 'react'

export default function test(props) {
  console.log('函数组件点击更新：', props.times)
  console.log('this:', this)
  return (
    <div>{props.times}</div>
  )
}