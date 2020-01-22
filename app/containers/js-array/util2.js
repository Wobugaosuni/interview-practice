/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = function(nums, target) {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				console.log('result:', [i, j])
				return [i, j]
			}
		}
	}
}

export const twoSum2 = function(nums, target) {
	const obj = {}
	for(let i = 0; i < nums.length; i++) {
		// 遍历一遍
		if (obj[nums[i]] !== undefined) {
			// 已经存在了
			console.log('result:', [obj[nums[i]], i])
			return [obj[nums[i]], i]
		} else {
			// 不存在，对应的key是要匹配的值，value是当前下标
			obj[target - nums[i]] = i
		}
	}
}
