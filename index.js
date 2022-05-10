let input = require("fs").readFileSync("example.txt").toString().split("\n")

const [N, M] = input.shift().split(" ")
const array = input.map(v =>
  v
    .trim()
    .split(" ")
    .map(v => Number(v))
)

const solution = (N, M, array) => {
  let answer = Number.MIN_SAFE_INTEGER
  let l = array.length
  const arr = array

  function DFS(L, sumScore, sumTime) {
    if (sumTime > M) return
    if (L === l) {
      answer = Math.max(answer, sumScore)
    } else {
      DFS(L + 1, sumScore + arr[L][0], sumTime + arr[L][1])
      DFS(L + 1, sumScore, sumTime)
    }
  }

  DFS(0, 0, 0)
  console.log(answer)
}

solution(N, M, array)
