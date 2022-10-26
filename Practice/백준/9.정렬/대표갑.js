let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number)

const getAverage = input => {
  const L = input.length
  const sum = input.reduce(a, b => a + b)
  return parseInt(sum / L)
}

const getCenterNum = input => {
  const sorted = input.sort((a, b) => a - b)
  return sorted[2]
}

console.log(getAverage(input))
console.log(getCenterNum(input))
