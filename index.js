let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map(v => v.split(" ").map(v => Number(v) + 10))

input.shift()

function getCombinations(arr) {
  var combinations = []

  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      combinations.push([arr[i], arr[j]])
    }
  }

  return combinations
}

function getRec([pos1, pos2]) {
  let width
  if (pos1[0] > pos2[0])
    width = pos2[0] - (pos1[0] - 10) < 0 ? 0 : pos2[0] - (pos1[0] - 10)
  else width = pos1[0] - (pos2[0] - 10) < 0 ? 0 : pos1[0] - (pos2[0] - 10)
  const height = pos1[1] - pos2[1]

  return width * height
}

function solution(positions) {
  let overlaped = 0
  const combinations = getCombinations(positions)
  let total = positions.length * 100

  for (const combination of combinations) {
    overlaped += getRec(combination)
  }

  return total - overlaped
}

console.log(solution(input))
