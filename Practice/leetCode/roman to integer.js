/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let answer = 0
  const table = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  for (let i = 0; i < s.length; i++) {
    if (table[s[i]] < table[s[i + 1]]) answer -= table[s[i]]
    else answer += table[s[i]]
  }
  return answer
}
