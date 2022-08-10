let input = require("fs").readFileSync("example.txt").toString().split("\n")
const total = Number(input.shift())
input.shift()
const receipt = input.map(v => v.trim().split(" ").map(Number))
console.log(receipt)
function solution(total, receipt) {
  let answer = "No"

  const sumReceipt = receipt.reduce((acc, cur) => {
    return acc + cur[0] * cur[1]
  }, 0)

  console.log(sumReceipt, total)

  if (total === sumReceipt) answer = "Yes"
  return answer
}

console.log(solution(total, receipt))
