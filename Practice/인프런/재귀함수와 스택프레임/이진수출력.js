const solution = () => {
  let answer = ""

  function DFS(n) {
    if (n === 0) return
    else {
      DFS(parseInt(n / 2))
      answer += n % 2
    }
  }

  DFS(11)
  return answer
}

function solution(n) {
  let answer = ""
  function DFS(L) {
    if (L == 0) {
      return console.log(answer)
    } else {
      answer = (L % 2) + answer
      DFS(parseInt(L / 2))
    }
  }
  DFS(n)
}

solution(16)
