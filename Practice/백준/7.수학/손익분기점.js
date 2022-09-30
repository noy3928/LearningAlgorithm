const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let [A, B, C] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number)

const solution = (A, B, C) => {
  if (B >= C) return -1
  let bep = 1
  while (A + B * bep > C * bep) {
    bep++
  }
  if (Number.isInteger(A / (C - B))) return bep + 1
  else return bep
}

console.log(solution(A, B, C))
