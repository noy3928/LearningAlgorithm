const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = require("fs").readFileSync(filePath).toString().trim().split("\n")
input.shift()

const array = input.map(v => v.split(" ").map(Number))

const getAverage = (num, arr) => {
  const sum = arr.reduce((a, b) => a + b, 0)
  const average = parseInt(sum / num)
  return average
}

const getAboveAverage = arr => {
  const num = arr.shift()
  const average = getAverage(num, arr)
  const aboveNum = arr.reduce((acc, cur) => {
    if (cur > average) return acc + 1
    else return acc
  }, 0)
  const aboveAverage = (aboveNum / num) * 100
  const result = String(aboveAverage.toFixed(3)) + "%"
  return result
}

const solution = (arrs, averageHelper) => {
  arrs.forEach(arr => {
    console.log(averageHelper(arr))
  })
}

solution(array, getAboveAverage)
