function solution(n) {
  let answer = []
  let ch = Array.from({ length: n + 1 }, () => 0)
  function DFS(L) {
    if (L === n + 1) {
      let tmp = ""
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + " "
      }
      if (tmp.length > 0) answer.push(tmp.trim())
    } else {
      ch[L] = 1
      DFS(L + 1)
      ch[L] = 0
      DFS(L + 1)
    }
  }
  DFS(1)
  return answer
}

console.log(solution(3))

function solution(n) {
  let ch = Array.from({ length: n }, () => false)
  function DFS(L) {
    if (L == n + 1) {
      let tmp = []
      for (let i = 1; i < n + 1; i++) {
        if (ch[i]) {
          tmp.push(i)
        }
      }
      console.log(tmp.join(" "))
    } else {
      ch[L] = true
      DFS(L + 1)
      ch[L] = false
      DFS(L + 1)
    }
  }
  DFS(1)
}
