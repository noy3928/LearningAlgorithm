let input = require("fs").readFileSync("example.txt").toString().split("\n")
input.shift()

const nums = input.map(v => v.trim().split(" ").map(Number))

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Case #${i + 1}: ${arr[i][0] + arr[i][1]}`)
  }
}

solution(nums)
