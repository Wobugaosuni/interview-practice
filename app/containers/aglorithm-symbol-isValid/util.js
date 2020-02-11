export function isValid(str) {
  // 优化，是奇数的话，直接return
  if(str.length % 2) return false

  // 保存左括号的数组
  const leftArr = []
  // 键值对
  const symb = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  // 遍历数组
  for (let item of str) {
    if (item in symb) {
      // 是左括号啦，把右括号存进去
      leftArr.push(symb[item])
    } else {
      // 是右括号啦
      // 这个右括号，必须与leftArr最后一位的匹配哟
      if (item !== leftArr.pop()) {
        return false
      }
    }
  }

  // 数组遍历完了
  // 防止全是左括号的情形
  if (!leftArr.length) {
    console.log('有效的数组')
    return true
  }
}

// 暴力之美
export function isValid2(str) {
  if(str.length % 2) return false

  while (str.length) {
    let temp = str

    str = str.replace('()', '')
    str = str.replace('{}', '')
    str = str.replace('[]', '')

    // 遇到不能消除的
    if (temp === str) return false
  }

  console.log('有效的数组')
  return true
}