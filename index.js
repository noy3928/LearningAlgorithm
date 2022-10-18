let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let [N, M] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number)

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

const solution = (N, M, checkPrime) => {
  let sum = 0
  let firstPrime = 0
  for (let i = N; i <= M; i++) {
    if (checkPrime(i)) {
      if (!firstPrime) firstPrime = i
      sum += i
    }
  }
  if (!sum) return -1
  return sum + "\n" + firstPrime
}

console.log(solution(N, M, isPrime))
