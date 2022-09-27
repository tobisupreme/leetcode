/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * Loop through the array nums
 * for i = 0 until i = nums.length - 1
 * if nums[i] + nums[i+1] == target, return [i, i+1]
 *
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 5))
console.log(twoSum([3, 3], 6))
