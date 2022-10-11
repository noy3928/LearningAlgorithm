const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let [A, B, V] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number)

const solution = (A, B, V) => {
  return Math.ceil((V - B) / (A - B))
}

console.log(solution(A, B, V))
