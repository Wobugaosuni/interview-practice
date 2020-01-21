/**
 * @param {string} s
 * @return {number}
 */
// 思路
// arr 维护当前不重复的子串
// 遍历字符串，没重复的元素 push 进数组
// 遇到重复的，清空之前的数组，再push进去
// max：上次arr长度和当前arr长度的最大值
export const lengthOfLongestSubstring = function(s) {
  let arr = []
  let max = 0

  for (let item of s) {
    // 重复的第一个元素的index!!
    const currentIndex = arr.indexOf(item)
    if (currentIndex > -1) {
      // 重复了，清空前面数组
      arr.splice(0, currentIndex + 1)
    }
    // 把当前元素放进去
    arr.push(item)
    console.log('arr:', arr)
    // 每次更新，保存最长的长度
    max = arr.length > max ? arr.length : max
  }
  console.log('max:', max)

  return arr.length
}

// 获取不重复的子串
export const childsOfLongestSubstring = function(s) {
  const strArr = s.split('')
  let arr = []
  let resultArr = []

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

    // 最后一次遍历
    if (index === strArr.length - 1) {
      resultArr.push(arr)
    }
  })
  console.log('resultArr:', resultArr)

  return resultArr

}

/**
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefix = function(strs) {
    if (!strs.length) return ''
    let res = ''

    for (let i = 0; i < strs[0].length; i++) {
        // 逐位比较
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i]) {
                console.log('不重复了，退出')
                return res
            } 
        }
        console.log(strs[0][i])
        res += strs[0][i]
    }

    return res
};