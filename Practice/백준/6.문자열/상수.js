const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let [N, M] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number)

const reverse = num => {
  let reversed = ""
  while (num) {
    reversed += num % 10
    num = parseInt(num / 10)
  }
  return Number(reversed)
}

const solution = (n, m) => {
  const reversedN = reverse(n)
  const reversedM = reverse(m)
  return reversedN > reversedM ? reversedN : reversedM
}

console.log(solution(N, M))
