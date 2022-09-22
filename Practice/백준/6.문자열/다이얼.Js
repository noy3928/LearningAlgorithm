const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = require("fs").readFileSync(filePath).toString().trim()

const solution = str => {
  const dial = new Map()
  let count = 0
  let dialNum = 3
  let sum = 0

  for (let ASC = 65; ASC <= 90; ASC++) {
    if (ASC == 83 || ASC == 90) {
    } else if (count > 2) {
      dialNum++
      count = 0
    }

    dial.set(String.fromCharCode(ASC), dialNum)
    count++
  }
  ;[...str].forEach(char => {
    sum += dial.get(char)
  })
  console.log(dial)
  return sum
}

console.log(solution(input))
