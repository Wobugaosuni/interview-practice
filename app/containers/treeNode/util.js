export function breadthLevelOrder(root) {
  if (!root) return []

  // 保存结果
  const result = []

  let currentNodes = []
  // 当前循环节点
  currentNodes.push(root)

  while (currentNodes.length) {
    const subResult = []
    // 每次作更新
    const nextSubNodes = []
    currentNodes.forEach(item => {
      // 放节点的值
      subResult.push(item.val)

      // 左右节点放到下一次循环
      if (item.left) nextSubNodes.push(item.left)
      if (item.right) nextSubNodes.push(item.right)
    })
    // 放完了
    result.push(subResult)
    // 继续循环
    currentNodes = nextSubNodes
  }

  console.log('result:', result)
  return result
}

/**
 * DFS，需要记住层级
 */
export function deepLevelOrder(root) {
  if (!root) return []

  const result = []

  dfs(root, 0)
  function dfs(current, level) {
    // 存放value的层级
    result[level] || (result[level] = [])

    result[level].push(current.val)

    let newL = level
    if (current.left || current.right) newL += 1
    if (current.left) dfs(current.left, newL)
    if (current.right) dfs(current.right, newL)
  }

  console.log('result:', result)
  return result
}

/**
 * 锯齿形层次遍历
 * 第二层：从右往左
 * 第三层：从左往右
 * 需要记住层级
 */
export function zigzagLevelOrder(root) {
  let result = deepLevelOrder(root)
  result = result.map((item, index) => {
    if (index % 2) {
      // 倒序
      return item.reverse()
    }
    // 正序
    return item
  })
  console.log('result:', result)
  return result
}