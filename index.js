const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = require("fs").readFileSync(filePath).toString().trim().split("\n")

const array = input.map(Number)

const solution = arr => {
  const result = new Set()
  arr.forEach(v => {
    result.add(v % 42)
  })
  return result.size
}

console.log(solution(array))
