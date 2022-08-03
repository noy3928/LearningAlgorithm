let input = Number(require("fs").readFileSync("example.txt").toString())

function solution(year) {
  if (year % 4 !== 0) return 0
  if (year % 100 == 0) {
    if (year % 400 == 0) return 1
    else return 0
  } else return 1
}

console.log(solution(input))
