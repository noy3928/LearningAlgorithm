let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .reduce((a, b) => a * b)

function solution(num) {
  const str = String(num)
  const map = Array.from({ length: 10 }, () => 0)

  for (let i = 0; i < str.length; i++) {
    map[Number(str[i])]++
  }

  return map.join("\n")
}

console.log(solution(input))
