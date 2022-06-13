let input = require("fs").readFileSync("example.txt").toString().split("\n")

const [N, M] = input
  .shift()
  .split(" ")
  .map(v => Number(v))

const arr = input
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

solution(M, N, arr)

//1.DFS를 끝마치는 순간은 tmp의 값의 합이 15와 같거나 넘을 때.
//2.그 순간의 L값을 확인한다.
//3.항상 L의 최솟값을 answer에 저장한다.
//4.맨 처음 answer값은 Number.MAX_SAFE_NUMBER로 한다.
//5.DFS내부에서는 for of문으로 각각의 요소들을 돌린다.
