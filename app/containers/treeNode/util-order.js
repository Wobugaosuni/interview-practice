/**
 * 前序遍历，先放当前节点，再放左右节点
 */
export function preorderTraversal(root) {
  if (!root) return []

  // 遍历的结果
  const result = []

  pushNode(root)
  
  function pushNode(node) {
    result.push(node.val)
    if (node.left) pushNode(node.left)
    if (node.right) pushNode(node.right)
  }

  return result
}

export function inorderTraversal(root) {
  if (!root) return []

  // 遍历的结果
  const result = []

  pushNode(root)

  function pushNode(node) {
    if (node.left) pushNode(node.left)
    result.push(node.val)
    if (node.right) pushNode(node.right)
  }

  return result
}

export function nextorder(root) {
  if (!root) return []

  // 遍历的结果
  const result = []

  pushNode(root)

  function pushNode(node) {
    if (node.left) pushNode(node.left)
    if (node.right) pushNode(node.right)
    result.push(node.val)
  }

  return result
}