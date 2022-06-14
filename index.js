let [N, M] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map(v => Number(v))
console.log(N, M)

function solution(N, M) {
  let answer
  let dy = Array.from(Array(N + 1), () => Array(M + 1).fill(0))

  function DFS(n, m) {
    if (dy[n][m] !== 0) return dy[n][m]
    if (n === m || m === 0) return 1
    else return (dy[n][m] = DFS(n - 1, m - 1) + DFS(n - 1, m))
  }
  answer = DFS(N, M)
  console.log(answer)
}

solution(N, M)
