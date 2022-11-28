let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")
const [M, N] = input.shift().split(" ").map(Number)

const mappedPoketmon = new Map()
const poketmonList = input.splice(0, M)
poketmonList.forEach((v, i) => mappedPoketmon.set(v, i + 1))

const question = input

const solution = (mappedPoketmon, question) => {
  let answer = ""
  question.forEach(v => {
    if (Number.isNaN(+v)) answer += mappedPoketmon.get(v) + "\n"
    else answer += poketmonList[+v - 1] + "\n"
  })

  console.log(answer)
}

solution(mappedPoketmon, question)
