let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = Number(fs.readFileSync(filePath).toString().trim())

const solution = input => {
  const n = +input
  const dp = new Array(n + 1).fill(0)
  dp[1] = dp[2] = 1

  let cnt = 0
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
    cnt++
  }

  return [dp[n], cnt].join(" ")
}

console.log(solution(input))
