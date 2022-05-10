function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER
  let n = ps.length
  function DFS(L, sum, time) {
    if (time > m) return
    if (L === n) {
      answer = Math.max(answer, sum)
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L])
      DFS(L + 1, sum, time)
    }
  }

  DFS(0, 0, 0)
  return answer
}

let ps = [10, 25, 15, 6, 7]
let pt = [5, 12, 8, 3, 4]
console.log(solution(20, ps, pt))

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
