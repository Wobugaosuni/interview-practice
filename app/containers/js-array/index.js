import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'

function flattenArr(arr) {
  return arr.reduce((accu, current) => {
    return accu.concat(Array.isArray(current) ? flattenArr(current) : current)
  }, [])
}

function flattenArr2(arr) {
  // 如果子元素还是数组，继续循环
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }

  console.log(arr)
  return arr
}

function flattenArrAssignLevel(arr, level) {
  const newArr = arr.flat(level)

  console.log('flattenArrAssignLevel:', newArr)
}

function setArray(arr) {
  const flatArr = flattenArr2(arr)

  const newArr = [...new Set(flatArr)]

  console.log('去重后数组：', newArr)
}

function shallowCopy() {
  const arr = [{a:1}, 3]

  const data = arr.slice(0)
  data[0].a = 2

  console.log('原数组也改变了：', arr)

  return data
}
function shallowCopy2() {
  const arr = [{a:1}, 3]

  const data = [].concat(arr)
  data[0].a = 2

  console.log('原数组也改变了：', arr)

  return data
}
function shallowCopy3() {
  const arr = [{a:1}, 3]

  const data = [...arr]
  data[0].a = 2

  console.log('原数组也改变了：', arr)

  return data
}

function deepCopy() {
  const arr = [{a:1}, 3]

  const data = JSON.parse(JSON.stringify(arr))
  data[0].a = 2

  console.log('原数组没改变：', arr)
  console.log('拷贝数组改变：', data)

  return data
}

class JsArray extends React.Component {
  givenArr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]

  render() {
    return (
      <div role="containers:JsArray">
        <h2>1. 扁平化数组</h2>
        <div>需要扁平化的数组是：<pre>{JSON.stringify(this.givenArr)}</pre></div>
        <li>
          <span>不确定数组层级的前提下，使用Array.reduce</span>
          {/* <SyntaxHighlighter>{flattenArr.toString()}</SyntaxHighlighter> */}
          <button onClick={() => console.log(flattenArr(this.givenArr))}>完全扁平化</button>
        </li>

        <li>
          <span>或者使用扩展运算符 + Array.some</span>
          {/* <SyntaxHighlighter>{flattenArr2.toString()}</SyntaxHighlighter> */}
          <button onClick={() => flattenArr2(this.givenArr)}>完全扁平化</button>
        </li>
        
        <li>
          <span>额外：指定递归深度，使用Array.flat</span>
          {/* <SyntaxHighlighter>{flattenArrAssignLevel.toString()}</SyntaxHighlighter> */}
          <button onClick={() => flattenArrAssignLevel(this.givenArr)}>深度一层</button>
        </li>

        <h2>2. 数组去重</h2>
        <div>
          <div>在扁平化的基础上，可以直接去重</div>
          <button onClick={() => setArray(this.givenArr)}>去重</button>
        </div>

        <h2>3. 浅拷贝数组的方法：slice，concat，...</h2>
        <button onClick={shallowCopy}>测试slice</button>
        <button onClick={shallowCopy2}>测试concat</button>
        <button onClick={shallowCopy3}>测试...</button>

        <h2>4. 深拷贝数组</h2>
        <button onClick={deepCopy}>测试</button>
      </div>
    )
  }
}

export default JsArray
