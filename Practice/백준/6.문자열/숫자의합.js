const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = require("fs").readFileSync(filePath).toString().split("\n")
input.shift()
input = input.shift()

const solution = value => {
  const result = [...value].reduce((acc, cur) => {
    return acc + Number(cur)
  }, 0)
  return result
}

console.log(solution(input))
