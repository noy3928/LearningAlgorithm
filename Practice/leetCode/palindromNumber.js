/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const input = String(x)
  const length = input.length
  let answer = true

  for (let i = 0; i < length / 2; i++) {
    if (input[i] !== input[length - 1 - i]) {
      answer = false
    }
  }

  return answer
}

//-----------------

var isPalindrome = function (x) {
  var s = "" + x
  var l = 0
  var r = s.length - 1
  while (l < r) {
    if (s[l] !== s[r]) return false
    l++
    r--
  }
  return true
}
