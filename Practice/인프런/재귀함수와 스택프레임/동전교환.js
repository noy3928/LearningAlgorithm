function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER
  let n = arr.length
  function DFS(L, sum) {
    if (sum > m) return
    if (L >= answer) return
    if (sum === m) {
      answer = Math.min(answer, L)
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i])
      }
    }
  }
  DFS(0, 0)
  return answer
}

let arr = [1, 2, 5]
console.log(solution(15, arr))

//-----------

let [N, M, S] = require("fs").readFileSync("example.txt").toString().split("\n")

const array = M.split(" ").map(v => Number(v))

const solution = (M, S) => {
  let answer = Number.MAX_SAFE_INTEGER
  function DFS(L, SUM) {
    console.log(L, SUM)
    if (SUM >= S) {
      answer = Math.min(answer, L)
      return
    } else {
      for (const x of M) {
        DFS(L + 1, SUM + x)
      }
    }
  }
  DFS(0, 0)
  console.log(answer)
}

solution(array, Number(S))
