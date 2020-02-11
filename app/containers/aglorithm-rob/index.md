## 动态规划

思路：
1. 标签：动态规划
2. 动态规划方程：dp[n] = MAX( dp[n-1], dp[n-2] + num )
3. 由于不可以在相邻的房屋闯入，所以在当前位置 n 房屋可盗窃的最大值，要么就是 n-1 房屋可盗窃的最大值，要么就是 n-2 房屋可盗窃的最大值加上当前房屋的值，二者之间取最大值
4. 举例来说：
1 号房间可盗窃最大值为 3 即为 dp[1]=3，
2 号房间可盗窃最大值为 4 即为 dp[2]=4，
3 号房间自身的值为 2 即为 num=2，那么 dp[3] = MAX( dp[2], dp[1] + num ) = MAX(4, 3+2) = 5，3 号房间可盗窃最大值为 5
5. 时间复杂度：O(n)，n 为数组长度

参考：
- https://leetcode-cn.com/problems/house-robber/solution/hua-jie-suan-fa-198-da-jia-jie-she-by-guanpengchn/
- https://leetcode-cn.com/problems/house-robber/