let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let N = Number(fs.readFileSync(filePath).toString().trim())

const solution = n => {
  let sum = 0
  while (n > 0) {
    if (n % 5 == 0) {
      sum += n / 5
      break
    }

    n -= 3
    if (n < 0) return (sum = -1)
    sum += 1
  }
  return sum
}

console.log(solution(N))
