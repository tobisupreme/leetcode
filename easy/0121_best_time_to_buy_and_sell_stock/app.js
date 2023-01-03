/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let l = 0,
    r = 1
  let maxProfit = 0

  while (r < prices.length) {
    // check if profitable
    if (prices[l] < prices[r]) {
      let profit = prices[r] - prices[l]
      maxProfit = Math.max(maxProfit, profit)
      r += 1
    } else {
      // update left pointer if not
      l = r
      r = l + 1
    }
  }

  return maxProfit
}

// Test cases
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9]))
