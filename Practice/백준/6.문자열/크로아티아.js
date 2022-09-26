const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = require("fs").readFileSync(filePath).toString().trim()

const solution = str => {
  const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]
  croatia.forEach(char => {
    str = str.replaceAll(char, "^")
  })
  return str.length
}

console.log(solution(input))
