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
