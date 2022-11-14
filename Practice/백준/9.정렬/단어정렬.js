let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")
input.shift()

let result = ""

const arr = [...new Set(input)]

arr
  .sort((a, b) => a.length - b.length || a.localeCompare(b))
  .forEach(v => (result += `${v}\n`))

console.log(result)
