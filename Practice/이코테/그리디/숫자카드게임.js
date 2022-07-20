let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map(v => v.split(" "))
  .map(v => v.map(v => Number(v)))

function solution(arr) {
  const minArr = []
  let answer = 0
  arr.forEach(eachArr => {
    minArr.push(Math.min(...eachArr))
  })
  answer = Math.max(...minArr)
  console.log(answer)
}

solution(input)
