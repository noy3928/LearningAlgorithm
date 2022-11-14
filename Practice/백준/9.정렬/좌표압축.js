let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")
input.shift()

const arr = input.shift().split(" ").map(Number)
const sortedArr = [...new Set(arr)]
sortedArr.sort((a, b) => a - b)

const mapedArr = new Map()
sortedArr.forEach((v, i) => mapedArr.set(v, i))

let result = ""

arr.forEach(v => (result += `${mapedArr.get(v)} `))

console.log(result)
