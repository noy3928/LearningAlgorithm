let input = require("fs").readFileSync("example.txt").toString()
console.log(input)

function solution(n) {
  function DFS(L, sum) {
    if (L === 0) return console.log(sum)
    else DFS(L - 1, sum * L)
  }
  DFS(n, 1)
}

solution(parseInt(input))
