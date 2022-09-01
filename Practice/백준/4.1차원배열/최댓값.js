let input = require("fs").readFileSync("example.txt").toString().split("\n")
input.shift()
const arr = input.map(Number)

const solution = array => {
  const maxNum = Math.max(...array)
  let idx = 0
  array.forEach((v, i) => {
    if (v === maxNum) idx = i + 2
  })
  console.log(maxNum + "\n" + idx)
}

solution(arr)
