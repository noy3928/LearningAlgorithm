let input = require("fs").readFileSync("example.txt").toString()

function solution(input) {
  function DFS(L, N, M) {
    if (L === input) return console.log(N)
    else DFS(L + 1, M, N + M)
  }
  DFS(0, 0, 1)
}

const factorial = n => {
  if (n == 0) return 1
  return n != 1 ? n * factorial(n - 1) : 1
}

solution(parseInt(input))
