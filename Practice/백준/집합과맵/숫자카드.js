let input = require("fs").readFileSync("example.txt").toString().split("\n")
input.shift()
const N = input.shift().split(" ")
input.shift()
const M = input.shift().split(" ")

function solution(n, m) {
  const setN = new Set(n)
  m.forEach((v, i) => {
    if (setN.has(v)) m[i] = 1
    else m[i] = 0
  })
  console.log(m.join(" "))
}

solution(N, M)
