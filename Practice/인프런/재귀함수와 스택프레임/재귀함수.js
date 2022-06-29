function solution(n) {
  function DFS(L) {
    if (L == 0) return
    else {
      DFS(L - 1)
      console.log(L)
    }
  }
  DFS(n)
}

solution(3)

function DFS(L) {
  if (L == N) {
    console.log(L)
    return
  } else {
    console.log(L)
    DFS(L + 1)
  }
}
