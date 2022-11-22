/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 var search = function(nums, target) {
  /**
   * Remove duplicates
   * Assign the first element as the low and the last element as the high
   * While the low point is greater than the high point
   *  Find mid point of the array. If target matches the mid, return the index
   *  If target is on the left side of the array, discard the right
   *  If target is on the right side of the array, discard the left
   * Return -1
   */
    
  const unique = new Set(nums)
  const arr = [...unique]

  let low = 0, high = arr.length - 1, mid
  while(low <= high) {
    mid = Math.floor((low + high) / 2)

    if (arr[low] === target) return true
    if (arr[mid] === target) return true
    if (arr[high] === target) return true

    if (arr[low] <= arr[mid]) {
      // Check if target is on the left side and discard the right side
      if (target < arr[mid] && target >= arr[low]) high = mid - 1
      else low = mid + 1 // discard the left side if target is not within range
    } else {
      // Check if target is on the left side and discard the right side
      if (target > arr[mid] && target <= arr[high]) low = mid + 1
      else high = mid - 1 // discard the right side if target is not within range
    }
  }

  return false
}
