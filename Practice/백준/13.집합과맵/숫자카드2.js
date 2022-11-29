let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")
input.shift()

const base = input.shift().split(" ").map(Number)

input.shift()

const arr = input.shift().split(" ").map(Number)

const solution = (base, arr) => {
  const answer = []

  const baseMap = new Map()

  base.forEach(num => {
    if (!baseMap.has(num)) baseMap.set(num, 1)
    else baseMap.set(num, baseMap.get(num) + 1)
  })

  arr.forEach(num => {
    if (!baseMap.has(num)) answer.push(0)
    else answer.push(baseMap.get(num))
  })

  console.log(answer.join(" "))
}

solution(base, arr)
