import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'

const data2 = [
  {id:4, name:'部门D', parentId:1},
  {id:5, name:'部门E', parentId:2},
  {id:6, name:'部门F', parentId:3},
  {id:3, name:'部门C', parentId:1},
  {id:7, name:'部门G', parentId:2},
  {id:8, name:'部门H', parentId:4},
  {id:1, name:'部门A'},
  {id:2, name:'部门B'},
]

const data3 = [
  {
    "id": "lily",
    "age": 88
  },
  {
    "id": "jack",
    "age": 60,
    "parentId": "lily"
  },
  {
    "id": "rose",
    "age": 40,
    "parentId": "jack"
  },
  {
    "id": "pin",
    "age": 70,
    "parentId": "lily"
  }
]

function toTree(arr) {
  // 深拷贝一个数组，避免干扰
  const data = JSON.parse(JSON.stringify(arr))

  // 保存键值对
  const obj = {}
  data.forEach(item => obj[item.id] = item)

  const res = []
  data.forEach(item => {
    if (!item.parentId) {
      // 是父节点了
      res.push(item)
    } else {
      // 有父节点
      if (item.parentId in obj) {
        const parent = obj[item.parentId]
        parent.children = parent.children || []
        parent.children.push(item)
        delete item.parentId
      }
    }
  })

  console.log('tree:', res)
  return res
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
