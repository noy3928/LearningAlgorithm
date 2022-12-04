let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")
input.shift()

const groupA = new Map()
const groupB = new Map()
input
  .shift()
  .split(" ")
  .map(Number)
  .forEach((v, i) => groupA.set(v, i))
input
  .shift()
  .split(" ")
  .map(Number)
  .forEach((v, i) => groupB.set(v, i))

const solution = (A, B) => {
  let answer = 0
  for (const [key, value] of A) {
    if (!B.has(key)) answer++
  }

  for (const [key, value] of B) {
    if (!A.has(key)) answer++
  }
  console.log(answer)
}

solution(groupA, groupB)
