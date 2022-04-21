const solution = () => {
  let answer = "";

  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      answer += n % 2;
    }
  }

  DFS(11);
  return answer;
};
