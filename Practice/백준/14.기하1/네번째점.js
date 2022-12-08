let fs = require("fs")
const { Z_DEFAULT_COMPRESSION } = require("zlib")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(v => v.split(" ").map(Number))

const xArr = input.map(v => v[0])
const yArr = input.map(v => v[1])

const solution = (xArr, yArr) => {
  const xMap = new Map()
  const yMap = new Map()

  xArr.forEach(v => {
    if (xMap.has(v)) xMap.set(v, xMap.get(v) + 1)
    else xMap.set(v, 1)
  })

  yArr.forEach(v => {
    if (yMap.has(v)) yMap.set(v, yMap.get(v) + 1)
    else yMap.set(v, 1)
  })

  let result = ""

  for (const [key, value] of xMap) {
    if (value == 1) result += key + " "
  }

  for (const [key, value] of yMap) {
    if (value == 1) result += key
  }

  console.log(result)
}

solution(xArr, yArr)
