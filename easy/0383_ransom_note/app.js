/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

/**
 * Create an object, magazineCount and count all instances
 * of characters in magazine
 * For each character in ransomNote
 * If it's presence in magazineCount is greater than 0
 * subtract 1 from the value of the count
 * Else, return false
 * return true
 */

var canConstruct = function (ransomNote, magazine) {
  /**
   * Create an object, magazineCount and count all instances
   * of characters in magazine
   * */
  const magazineCount = magazine.split('').reduce((obj, letter) => {
    if (!obj[letter]) {
      obj[letter] = 0
    }
    obj[letter]++
    return obj
  }, {})

  /**
   * or each character in ransomNote
   * If it's presence in magazineCount is greater than 0
   * subtract 1 from the value of the count
   * Else, return false
   */
  for (let i = 0; i < ransomNote.split('').length; i++) {
    if (magazineCount[ransomNote.split('')[i]] > 0) {
      magazineCount[ransomNote.split('')[i]]--
    } else {
      return false
    }
  }

  /**
   * return true
   */
  return true
}

// Test cases
console.log(canConstruct('a', 'b'))
console.log(canConstruct('aa', 'ab'))
console.log(canConstruct('aa', 'aab'))
