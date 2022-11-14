let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs.readFileSync(filePath).toString().split("\n").map(Number)
input.shift()

const sortedArr = input.sort((a, b) => a - b)
const N = sortedArr.length

const average = arr => Math.round(arr.reduce((a, b) => a + b) / N)
const centerValue = arr => arr[Math.floor(N / 2)]
const frequentValue = arr => {
  const obj = {}

  for (let i = 0; i < N; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1
    } else {
      obj[arr[i]]++
    }
  }

  let maxKey = Math.max(...Object.values(obj))

  const minArr = []

  for (const [key, value] of Object.entries(obj)) {
    if (value == maxKey) {
      minArr.push(key)
    }
  }

  minArr.sort((a, b) => a - b)

  if (minArr.length > 1) return minArr[1]
  else return minArr[0]
}
const minMinusMax = arr => arr[N - 1] - arr[0]

console.log(average(sortedArr))
console.log(centerValue(sortedArr))
console.log(frequentValue(sortedArr))
console.log(minMinusMax(sortedArr))
