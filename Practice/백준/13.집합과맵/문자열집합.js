let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")
const [M, N] = input.shift().split(" ").map(Number)

const inputArr = input.map(v => v.trim())

const baseSet = new Set(inputArr.splice(0, M))
const arr = inputArr

const solution = (baseSet, arr) => {
  let answer = 0

  arr.forEach(str => {
    if (baseSet.has(str)) answer++
  })

  return answer
}

console.log(solution(baseSet, arr))
