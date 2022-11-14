let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")
input.shift()

const arr = input.map(v => v.split(" ").map(v => (!isNaN(v) ? Number(v) : v)))

let result = ""

arr
  .sort((a, b) => {
    if (a[0] == b[0]) return
    return a[0] - b[0]
  })
  .forEach(v => (result += `${v[0]} ${v[1]}\n`))

console.log(result)
