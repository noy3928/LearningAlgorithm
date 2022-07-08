let input = require("fs").readFileSync("example.txt").toString()

function solution(input) {
  function DFS(L, N, M) {
    if (L === input) return console.log(N)
    else DFS(L + 1, M, N + M)
  }
  DFS(0, 0, 1)
}

solution(parseInt(input))
