function solution(n, m) {
  let answer = []
  let tmp = Array.from({ length: m }, () => 0)
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice())
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i
        DFS(L + 1)
      }
    }
  }

  DFS(0)
  return answer
}

console.log(solution(3, 2))

let [N, M] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map(v => Number(v))

const solution = (N, M) => {
  const tmp = Array.from({ length: M }, () => 0)
  let cnt = 0

  function DFS(L) {
    if (L === M) {
      console.log(tmp.join(" "))
      cnt++
    } else {
      for (let i = 1; i < N + 1; i++) {
        tmp[L] = i
        DFS(L + 1)
      }
    }
  }

  DFS(0)
  console.log(cnt)
}

solution(N, M)

//--------

function solution(m, n) {
  const tmp = Array.from({ length: n }, () => 0)
  function DFS(L) {
    if (L == n) {
      console.log(tmp.join(" "))
    } else {
      for (let i = 1; i <= m; i++) {
        tmp[L] = i
        DFS(L + 1)
      }
    }
  }
  DFS(0)
}
