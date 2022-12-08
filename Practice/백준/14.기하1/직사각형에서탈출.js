let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number)
const [x, y, w, h] = input

const result = Math.min(x, y, w - x, h - y)
console.log(result)
