import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'

const data2 = [
  {id:1, name:'部门A'},
  {id:2, name:'部门B'},
  {id:3, name:'部门C', parentId:1},
  {id:4, name:'部门D', parentId:1},
  {id:5, name:'部门E', parentId:2},
  {id:6, name:'部门F', parentId:3},
  {id:7, name:'部门G', parentId:2},
  {id:8, name:'部门H', parentId:4}
]

function toTree(arr) {
  // 深拷贝一个数组，避免干扰
  const data = JSON.parse(JSON.stringify(arr))

  // 筛选出父节点
  const tree = data.filter(item => !item.parentId)

  // 保存键值对
  const obj = {}

  data.forEach(item => {
    if (item.parentId) {
      // 判断是有存在键值对
      if (!obj[item.parentId]) {
        obj[item.parentId] = []
      }
      // 推进数组
      obj[item.parentId].push(item)
      // 删除属性
      delete item.parentId
    }
  })

  tree.forEach(item => item.children = obj[item.id])
  
  console.log('get tree:', tree)
  return tree
}

function toFlat(data, parentId) {
  let arr = []

  data.forEach(item => {
    if (!parentId) {
      // 是根节点
      arr.push({
        id: item.id,
        name: item.name
      })
    } else {
      // 不是根
      arr.push({
        id: item.id,
        name: item.name,
        parentId
      })
    }

    if (item.children) {
      // 继续遍历
      arr.push(...toFlat(item.children, item.id))
    }
  })

  console.log('arr:', arr)
  return arr
}

class JsTree extends React.Component {
  render() {
    return (
      <div role="containers:JsTree">
        <h2>将数据转换成tree结构</h2>
        <button onClick={() => toTree(data2)}>tree</button>

        <h2>tree结构扁平化</h2>
        <button onClick={() => {
          const tree = toTree(data2)
          const data = toFlat(tree)

          console.log('flat data:', data)
        }}>flat</button>
      </div>
    )
  }
}

export default JsTree
