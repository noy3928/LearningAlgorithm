let input = require("fs").readFileSync("example.txt").toString().split("\n")

function solution(n) {
  let answer = 1

  function DFS(L) {
    if (L === 1) {
      console.log(answer)
    } else {
      answer *= L
      DFS(L - 1)
    }
  }
  DFS(n)
}

solution(4)
