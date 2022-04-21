function solution(n) {
  let answer;
  function DFS(v) {
    if (v > 7) return;
    else {
      //전위
      DFS(v * 2);
      //중위
      DFS(v * 2 + 1);
      //후위
    }
  }

  DFS(1);
  return answer;
}
