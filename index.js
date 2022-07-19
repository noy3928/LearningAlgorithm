let input = require("fs").readFileSync("example.txt").toString().split("\n")

const [N, M, K] = input
  .shift()
  .split(" ")
  .map(v => Number(v))
const arr = input
  .shift()
  .split(" ")
  .map(v => Number(v))

function solution(m, k, arr) {
  const sorted = arr.sort((a, b) => b - a)
  const maxNum = sorted[0]
  const nextNum = sorted[1]

  const chunk = maxNum * k + nextNum
  const quotient = parseInt(m / (k + 1))
  const remainder = m % (k + 1)

  const answer = quotient * chunk + remainder * maxNum

  console.log(answer)
}

solution(M, K, arr)
