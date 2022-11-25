/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let l = i + 1,
      r = nums.length - 1
    while (l < r) {
      let threeSum = nums[i] + nums[l] + nums[r]
      if (threeSum > 0) r -= 1
      if (threeSum < 0) l += 1
      if (threeSum === 0) {
        res.push([nums[i], nums[l], nums[r]])
        l += 1
        while (nums[l] === nums[l - 1] && l < r) {
          l += 1
        }
      }
    }
  }

  return res
}
