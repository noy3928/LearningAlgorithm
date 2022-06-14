function solution(n, r) {
  let answer = []
  let dy = Array.from(Array(35), () => Array(35).fill(0))

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r]
    if (n === r || r === 0) return 1
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r))
  }
  answer = DFS(n, r)
  return answer
}

console.log(solution(5, 3))

//--------------------------

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
