/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Infinity
  let meh = 0
  for (let i = 0; i < nums.length; i++) {
    meh += nums[i]
    if (meh > max) {
      max = meh
    }
    if (meh < 0) {
      meh = 0
    }
  }
  return max
}

/** 
해당 문제는 카데인 알고리즘이라는 알고리즘을 활용해 문제를 풀어야한다. 
이 문제는 해당 알고리즘으로 풀어를 풀어야하는 유형으로 정리된 문제인 것 같았다. 
*/
