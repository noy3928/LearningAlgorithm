const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = require("fs").readFileSync(filePath).toString().trim().split("\n")
input.shift()
input = input.map(v => v.split(" "))

String.prototype.reduce = Array.prototype.reduce

const addChar = (num, char) => {
  let result = ""
  for (let i = 0; i < num; i++) result += char
  return result
}

const reduceStr = (num, char) => {
  return char.reduce((str, char) => {
    return str + addChar(num, char)
  }, "")
}

const solution = arr => {
  const result = arr.map(v => {
    return reduceStr(Number(v[0]), v[1])
  })
  return result.join("\n")
}

console.log(solution(input))
