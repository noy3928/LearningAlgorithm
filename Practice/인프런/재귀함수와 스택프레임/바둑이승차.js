function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER
  let n = arr.length
  function DFS(L, sum) {
    if (sum > c) return
    if (L === n) {
      answer = Math.max(answer, sum)
    } else {
      DFS(L + 1, sum + arr[L])
      DFS(L + 1, sum)
    }
  }
  DFS(0, 0)
  return answer
}

let arr = [81, 58, 42, 33, 61]
console.log(solution(259, arr))

let input = require("fs").readFileSync("example.txt").toString().split("\n")

const [N, M] = input.shift().split(" ")
const array = input.map(v => Number(v))

const solution = (N, arr) => {
  let answer = Number.MIN_SAFE_INTEGER
  let l = arr.length

  function DFS(L, sum) {
    if (sum > N) return
    if (L === l) {
      answer = Math.max(answer, sum)
    } else {
      DFS(L + 1, sum + arr[L])
      DFS(L + 1, sum)
    }
  }
  DFS(0, 0)
  console.log(answer)
}

solution(N, array)
