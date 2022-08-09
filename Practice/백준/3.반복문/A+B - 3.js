let input = require("fs").readFileSync("example.txt").toString().split("\n")
input.shift()
let arr = input.map(v =>
  v
    .trim()
    .split(" ")
    .map(v => Number(v))
)

const solution = array => {
  for (const [a, b] of array) {
    console.log(a + b)
  }
}

solution(arr)
