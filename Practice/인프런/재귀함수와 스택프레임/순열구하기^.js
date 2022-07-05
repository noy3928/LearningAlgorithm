function solution(m, arr) {
  let answer = []
  n = arr.length
  let ch = Array.from({ length: n }, () => 0)
  let tmp = Array.from({ length: m }, () => 0)
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice())
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1
          tmp[L] = arr[i]
          DFS(L + 1)
          ch[i] = 0
        }
      }
    }
  }
  DFS(0)
  return answer
}

let arr = [3, 6, 9]
console.log(solution(2, arr))

// ---------

let input = require("fs").readFileSync("example.txt").toString().split("\n")

const [N, M] = input
  .shift()
  .split(" ")
  .map(v => Number(v))

const array = input
  .shift()
  .split(" ")
  .map(v => Number(v))

const solution = (M, N, arr) => {
  let tmp = Array.from({ length: N - 1 }, () => 0)
  let chk = Array.from({ length: M }, () => 0)

  function DFS(L) {
    if (L === N - 1) {
      console.log(tmp.join(" "))
      return
    } else {
      for (let i = 0; i < N; i++) {
        if (chk[i] !== 1) {
          chk[i] = 1
          tmp[L] = arr[i]
          DFS(L + 1)
          chk[i] = 0
        } else {
          continue
        }
      }
    }
  }
  DFS(0)
}

solution(M, N, array)

//------------------

function solution(m, arr) {
  const n = arr.length
  const tmp = Array.from({ length: m }, () => 0)
  const check = Array.from({ length: n }, () => false)

  function DFS(L) {
    if (L === m) {
      return console.log(tmp.join(" "))
    } else {
      arr.forEach((v, i) => {
        if (!check[i]) {
          check[i] = true
          tmp[L] = v
          DFS(L + 1)
          check[i] = false
        } else return
      })
    }
  }
  DFS(0)
}

solution(2, [3, 6, 9, 12])
