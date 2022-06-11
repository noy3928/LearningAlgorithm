let [N, M, S] = require("fs").readFileSync("example.txt").toString().split("\n")

const arr = M.split(" ").map(v => Number(v))

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

solution(arr, Number(S))

//1.DFS를 끝마치는 순간은 tmp의 값의 합이 15와 같거나 넘을 때.
//2.그 순간의 L값을 확인한다.
//3.항상 L의 최솟값을 answer에 저장한다.
//4.맨 처음 answer값은 Number.MAX_SAFE_NUMBER로 한다.
//5.DFS내부에서는 for of문으로 각각의 요소들을 돌린다.
