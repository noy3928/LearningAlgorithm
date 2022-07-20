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

/*
1.각 배열 중에서 가장 작은 숫자가 있는 수가 있는 배열을 만든다. 
2.그 배열 안에서 가장 큰 수를 뽑는다. 
*/
