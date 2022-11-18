let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = Number(fs.readFileSync(filePath).toString())

const star = "***\n* *\n***"

const makeSquare = star => {
  let result = ""
  for (let i = 0; i < 3; i++) {
    result += star
  }
  return result
}
console.log(makeSquare(star))
