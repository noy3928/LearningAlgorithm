const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = Number(require("fs").readFileSync(filePath).toString())

function isValid(num) {
  if (num <= 99) return true

  let result = true
  const arr = []

  while (num) {
    arr.push(num % 10)
    num = parseInt(num / 10)
  }

  arr.reverse()
  let dif = arr[1] - arr[0]

  for (let i = 1; i < arr.length - 1; i++) {
    if (dif !== arr[i + 1] - arr[i]) return (result = false)
  }

  return result
}

const solution = num => {
  let count = 0
  for (let i = 1; i <= num; i++) {
    if (isValid(i)) count++
  }
  return count
}

console.log(solution(input))
