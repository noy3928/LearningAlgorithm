const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = require("fs").readFileSync(filePath).toString().trim()

const solution = str => {
  if (str == "") return 0
  return str.split(" ").length
}

console.log(solution(input))
