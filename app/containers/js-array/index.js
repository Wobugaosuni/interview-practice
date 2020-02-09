import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import {twoSum, twoSum2, find} from './util2'
import {flattenArr, flattenArr2, flattenArr3, flattenArrAssignLevel, setArray, shallowCopy, shallowCopy2, shallowCopy3, deepCopy} from './util'
import png1 from './1.png'

const x = [1,2,3,4,5]
const y = [2,3,4,5,6]
const z = [3,4,5,6,7]

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
          <span>使用扩展运算符 + Array.some</span>
          {/* <SyntaxHighlighter>{flattenArr2.toString()}</SyntaxHighlighter> */}
          <button onClick={() => flattenArr2(this.givenArr)}>完全扁平化</button>
        </li>

        <li>
          <span>使用 Array.flat</span>
          {/* <SyntaxHighlighter>{flattenArr2.toString()}</SyntaxHighlighter> */}
          <button onClick={() => flattenArr3(this.givenArr)}>完全扁平化</button>
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

        <h2>5. 两数之和</h2>
        <img width="600" src={png1} />
        <button onClick={() => twoSum([1,2,3,4,5,6], 7)}>测试</button>
        <button onClick={() => twoSum2([1,2,3,4,5,6], 7)}>使用哈希表，测试</button>

        <h2>6. 实现函数find，找出重复出现的（头条一面）</h2>
        <button onClick={() => {
          // find(x, y) // [2,3,4,5]
          find(x,y,z) // [3,4,5]
        }}>测试</button>
      </div>
    )
  }
}

export default JsArray
