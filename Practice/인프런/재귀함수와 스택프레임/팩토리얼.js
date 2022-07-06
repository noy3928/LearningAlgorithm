function solution(n) {
  let answer
  function DFS(n) {
    if (n === 1) return 1
    else return n * DFS(n - 1)
  }
  answer = DFS(n)
  return answer
}

console.log(solution(5))

//-------------------------

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

//------------------

function solution(n) {
  function DFS(L, sum) {
    if (L === 0) {
      return console.log(sum)
    } else {
      DFS(L - 1, sum * L)
    }
  }
  DFS(n, 1)
}
