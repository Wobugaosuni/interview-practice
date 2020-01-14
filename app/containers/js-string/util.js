/**
 * @param {string} s
 * @return {number}
 */
// 思路
// 遍历字符串，没重复的元素 push 进数组
// 遇到重复的，清空之前的数组，再push进去
export const lengthOfLongestSubstring = function(s) {
  let arr = []
  let resultArr = []
  let max = 0

  for (let item of s) {
    // 重复的第一个元素的index!!
    const currentIndex = arr.indexOf(item)
    if (currentIndex > -1) {
      // 重复了，清空前面数组
      const pastArr = arr.splice(0, currentIndex + 1)
      resultArr.push(pastArr)
    }
    // 把当前元素放进去
    arr.push(item)
    console.log('arr:', arr)
    // 每次更新，保存最长的长度
    max = arr.length > max ? arr.length : max
  }
  console.log('max:', max)
  console.log('resultArr:', resultArr)

  return arr.length
}

// 获取不重复的子串
export const childsOfLongestSubstring = function(s) {
  let arr = []
  let resultArr = []
  let max = 0
  const strArr = s.split('')

  strArr.forEach((item, index) => {
    // 重复的第一个元素的index!!
    const currentIndex = arr.indexOf(item)
    if (currentIndex > -1) {
      // 重复了，清空前面数组
      const pastArr = arr.splice(0, currentIndex + 1)
      resultArr.push(pastArr)
    }
    // 把当前元素放进去
    arr.push(item)
    console.log('arr:', arr)
    // 每次更新，保存最长的长度
    max = arr.length > max ? arr.length : max

    // 最后一次遍历
    if (index === strArr.length - 1) {
      resultArr.push(arr)
    }
  })
  console.log('max:', max)
  console.log('resultArr:', resultArr)

  return arr.length

}