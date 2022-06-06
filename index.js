let [N, M] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map(v => Number(v))

console.log(N, M)

const solution = (N, M) => {
  const tmp = Array.from({ length: M }, () => 0)

  function DFS(L) {
    if (L === M) {
      console.log(tmp.join(" "))
    } else {
      for (let i = 1; i < N + 1; i++) {
        tmp[L] = i
        DFS(L + 1)
      }
    }
  }

  DFS(0)
}

solution(N, M)
