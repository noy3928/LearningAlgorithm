let [N, K] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map(v => Number(v))

function solution(n, k) {
  let count = 0
  while (n !== 1) {
    count++
    if (n % k === 0) n = n / k
    else n -= 1
  }
  return count
}

console.log(solution(N, K))
