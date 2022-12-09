let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(v => v.split(" ").map(Number))

input.pop()

const solution = arr => {
  arr.forEach(v => {
    const set = new Set(v)
    const max = Math.max(...v)
    set.delete(max)
    const [m, n] = [...set]

    if (max ** 2 == m ** 2 + n ** 2) console.log("right")
    else console.log("wrong")
  })
}

solution(input)
