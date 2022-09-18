const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = require("fs").readFileSync(filePath).toString()

const solution = value => {
  const result = value.charCodeAt(0)
  return result
}

console.log(solution(input))
