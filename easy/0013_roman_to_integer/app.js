/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanSymbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  const v = s
    .split('')
    .map((u) => romanSymbols[u])
    .reverse()
  let returnInt = v[0]
  for (i = 1; i < v.length; i++) {
    if ((v[i - 1] === 5 || v[i - 1] === 10) && v[i] === 1) {
      returnInt -= 1
    } else if ((v[i - 1] === 50 || v[i - 1] === 100) && v[i] === 10) {
      returnInt -= 10
    } else if ((v[i - 1] === 500 || v[i - 1] === 1000) && v[i] === 100) {
      returnInt -= 100
    } else returnInt += v[i]
  }
  return returnInt
}

// Test case
console.log(romanToInt('MCMXCIV'))
