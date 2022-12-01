/**
 * @param {number[]} height
 * @return {number}
 * @pseudocode {
 * Initialise a result variable
 * Initialise a left and right pointer
 * While the right is greater than the left
 * *  calculate the area
 * *  replace the result variable with the area if the area is greater in value
 * *  update the left pointer if it is the smaller value else update the right pointer
 * return the result variable
 * }
 */
var maxArea = function (height) {
  /*
  // BRUTE FORCE
  // let result = 0

  // for (let l = 0; l < height.length; l++) {
  //   for (let r = l + 1; r < height.length; r++) {
  //     let area = (r - l) * Math.min(height[l], height[r])
  //     result = Math.max(result, area)
  //   }
  // }

  // return result
  */
  let result = 0
  let l = 0, r = height.length - 1

  while (l < r) {
    let area = (r - l) * Math.min(height[l], height[r])
    result = Math.max(result, area)

    if (height[l] < height[r]) {
      l += 1
    } else {
      r -= 1
    }
  }

  return result
}

// Test cases
const test1 = maxArea([1,8,6,2,5,4,8,3,7])
const test2 = maxArea([1,1])

console.log(test1) // 49
console.log(test2) // 1
