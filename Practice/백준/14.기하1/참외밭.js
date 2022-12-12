let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")
const per = Number(input.shift())

const arr = input.map(v => v.split(" ").map(Number))
const sizeArr = arr.map(v => v[1])

const heights = arr.filter(v => v[0] >= 3).map(v => v[1])
const widths = arr.filter(v => v[0] <= 2).map(v => v[1])

const maxHeight = Math.max(...heights)
const maxWidth = Math.max(...widths)

const rec = maxWidth * maxHeight

const maxWidthIndex = sizeArr.indexOf(maxWidth)
const minWIndex = maxWidthIndex + 2
const minHIndex = maxWidthIndex + 3

if (minWIndex > 5) minWIndex -= 5
if (minHIndex > 5) minHIndex -= 5

const minRec = arr[minHIndex][1] * arr[minWIndex][1]
const totalRec = rec - minRec
console.log(totalRec * per)
