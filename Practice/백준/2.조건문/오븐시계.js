let input = require("fs").readFileSync("example.txt").toString().split("\n")
const [H, M] = input
  .shift()
  .split(" ")
  .map(v => Number(v))
const TOTAL = Number(input.shift())

function solution(h, m, total) {
  let sumMinute = m + total

  if (sumMinute >= 60) {
    h += parseInt(sumMinute / 60)
    m = sumMinute % 60
  } else {
    m = sumMinute
  }

  if (h >= 24) {
    h = h % 24
  }

  return `${h} ${m}`
}

console.log(solution(H, M, TOTAL))
