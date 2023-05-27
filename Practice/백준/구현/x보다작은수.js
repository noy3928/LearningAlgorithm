let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map(v => v.split(" ").map(Number))

const [N, X] = input.shift()
const arr = input.shift()

function solution(arr) {
  const result = []

  arr.forEach(v => {
    if (v < X) {
      result.push(v)
    }
  })

  return result.join(" ")
}

console.log(solution(arr))
