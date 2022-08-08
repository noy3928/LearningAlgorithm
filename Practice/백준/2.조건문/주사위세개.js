let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map(v => Number(v))

function solution(input) {
  function checkNum(arr) {
    let type = 1
    let returnNum = arr[0]
    let mappedNum = new Map()
    arr.forEach(v => {
      if (mappedNum.has(v)) {
        mappedNum.set(v, mappedNum.get(v) + 1)
      } else {
        mappedNum.set(v, 1)
      }
    })

    if (mappedNum.size == 2) {
      for (const [key, value] of mappedNum) {
        if (value == 2) {
          returnNum = key
        }
      }
      type = 2
    } else if (mappedNum.size == 3) {
      returnNum = Math.max(...arr)
      type = 3
    }

    return [returnNum, type]
  }
  const [num, type] = checkNum(input)
  let answer = 0

  if (type === 1) {
    answer = 10000 + num * 1000
  } else if (type === 2) {
    answer = 1000 + num * 100
  } else {
    answer = num * 100
  }

  return answer
}

console.log(solution(input))
