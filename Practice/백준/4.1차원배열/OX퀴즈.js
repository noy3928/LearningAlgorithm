const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = require("fs").readFileSync(filePath).toString().trim().split("\n")
input.shift()

const reduceHelper = str => {
  let tmpNum = 0
  const result = [...str].reduce((acc, cur) => {
    if (cur == "X") {
      tmpNum = 0
      return acc
    } else {
      tmpNum += 1
      return acc + tmpNum
    }
  }, 0)
  return result
}

const solution = arrs => {
  arrs.forEach(str => {
    console.log(reduceHelper(str))
  })
}

solution(input)
