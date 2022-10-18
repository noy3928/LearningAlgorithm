let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")
input.shift()
const arr = input.shift().split(" ").map(Number)

const isPrime = n => {
  if (n == 1) return false
  if (n == 2) return true
  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}

const solution = (array, checkPrime) => {
  let count = 0
  array.forEach(v => {
    if (checkPrime(v)) count++
  })
  return count
}

console.log(solution(arr, isPrime))
