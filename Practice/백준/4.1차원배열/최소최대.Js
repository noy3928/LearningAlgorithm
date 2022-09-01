let input = require("fs").readFileSync("example.txt").toString().split("\n")
input.shift()

const array = input.shift().split(" ").map(Number)

const solution = arr => {
  return `${Math.min(...arr)} ${Math.max(...arr)}`
}

console.log(solution(array))
