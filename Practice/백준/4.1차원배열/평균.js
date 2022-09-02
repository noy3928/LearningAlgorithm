const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = require("fs").readFileSync(filePath).toString().trim().split("\n")

const N = Number(input.shift())
const array = input.shift().split(" ").map(Number)

const solution = (n, arr) => {
  const max = Math.max(...arr)
  let total = 0
  arr.forEach(v => {
    total += (v / max) * 100
  })
  return parseFloat(total / n)
}

console.log(solution(N, array))
