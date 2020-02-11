/**
 * @param {number[]} nums
 * @return {number}
 */
export const rob = function(nums) {
  const len = nums.length
  // 存储结果
  const dp = []

  dp[0] = 0
  dp[1] = nums[0]

  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
  }

  return dp[len]
}

// 例如 [1,2,3,1]，分两种情况
// 打劫第一家，不打劫最后一家，[1,2,3]
// 不打劫第一家，打劫最后一家，[2,3,1]
// 然后取两者中的最大值
export const rob2 = function(nums) {
    const len = nums.length
    
    // 处理极端情况
    if (len === 0) return 0
    if (len === 1) return nums[0]

    const group1 = rob(nums.slice(0, len - 1))
    const group2 = rob(nums.slice(1, len))

    return Math.max(group1, group2)
}
