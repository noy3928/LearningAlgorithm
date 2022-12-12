let fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString()
const radius = Number(input)
const euclidArea = radius * radius * Math.PI
const texiArea = radius * 2 * radius * 0.5 * 2

console.log(euclidArea.toFixed(6))
console.log(texiArea.toFixed(6))
