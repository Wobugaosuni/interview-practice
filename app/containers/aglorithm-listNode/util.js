// 反转链表
export function reverseList(head) {
  let pre = null
  let current = head

  while (current) {
    // 记录当前节点的下一个节点
    let temp = current.next

    // 将当前节点指向 pre
    current.next = pre

    // pre和cur都前进一位
    pre = current
    current = temp
  }

  return pre
}