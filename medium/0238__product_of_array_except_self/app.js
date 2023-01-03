/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const output = []

  let prefixVal = 1
  for (let i = 0; i < nums.length; i++) {
    output[i] = prefixVal
    prefixVal *= nums[i]
  }

  let postfixVal = 1
  for (let i = output.length - 1; i >= 0; i--) {
    output[i] *= postfixVal
    postfixVal *= nums[i]
  }

  return output
}

// Test cases
console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([-1, 1, 0, -3, 3]))
