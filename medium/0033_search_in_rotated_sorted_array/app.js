/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  /**
   * Assign the first element as the low and the last element as the high
   * While the low point is greater than the high point
   *  Find mid point of the array. If target matches the mid, return the index
   *  If target is on the left side of the array, discard the right
   *  If target is on the right side of the array, discard the left
   * Return -1
   */

  let low = 0, high = nums.length - 1, mid
  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    
    if (nums[mid] === target) return mid
    if (nums[low] === target) return low
    if (nums[high] === target) return high

    if (nums[low] <= nums[mid]) {
      // Check if target is on the left side and discard the right side
      if (target < nums[mid] && target >= nums[low]) high = mid - 1
      else low = mid + 1 // discard the left side if target is not within range
    } else {
      // Check if target is on the left side and discard the right side
      if (target > nums[mid] && target <= nums[high]) low = mid + 1
      else high = mid - 1 // discard the right side if target is not within range
    }
  }

  return -1
}

// Test cases
console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([4,5,6,7,0,1,2], 3))
console.log(search([4,5,6,7,0,1,2,5,4,6,7,24,7,4,2,4,7,4,3,8], 3))
console.log(search([1], 0))
console.log(search([ 6, 6, 7, 7, 7, 7, 8, 24, 0, 1, 2, 2, 3, 4, 4, 4, 4, 4, 5, 5 ], 24))
