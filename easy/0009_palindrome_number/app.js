/**
 * @param {number} x
 * @return {boolean}
 */

// if the number is less than zero, return false
// initialize a variable "original" with x
// initialize the reverse variable with 0
// loop over the number until it is less than or equal to zero
// Multiply the reversed variable by 10 and add the last digit of the number to it
// remove the last digit of x
// if the reversed number is equal to original ( initial number ), return true
// else, false

var isPalindrome = function (x) {
  const isNegative = x < 0 ? true : false

  if (isNegative) {
    return false
  }

  const original = x
  let reverse = 0

  while (x > 0) {
    reverse = 10 * reverse + (x % 10)
    x = parseInt(x / 10)
  }

  return reverse == original
}

// Test cases
console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
