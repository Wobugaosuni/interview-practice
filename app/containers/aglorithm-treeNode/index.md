## 二叉树结构（对象）

```js
const data = {
  val: 3,
  right:
  {
    val: 20,
    right: { val: 7, right: null, left: null },
    left: { val: 15, right: null, left: null }
  },
  left: { val: 9, right: null, left: null }
}
```

## 广度优先遍历（BFS，breadth first search）

例1用时：
执行用时 : 68 ms, 在所有 JavaScript 提交中击败了65.22%的用户
内存消耗 : 35.3 MB, 在所有 JavaScript 提交中击败了18.28%的用户

## 深度优先遍历（DFS，deep first search）

例1用时：
执行用时 : 64 ms, 在所有 JavaScript 提交中击败了81.65%的用户
内存消耗 : 35.8 MB, 在所有 JavaScript 提交中击败了6.09%的用户

在这个策略中，我们采用深度作为优先级，以便**从根开始一直到达某个确定的叶子，然后再返回根到达另一个分支**。

深度优先搜索策略又可以根据根节点、左孩子和右孩子的相对顺序被细分为**先序遍历，中序遍历和后序遍历**。