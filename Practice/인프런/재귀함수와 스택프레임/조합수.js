function solution(n, r) {
  let answer = []
  let dy = Array.from(Array(35), () => Array(35).fill(0))

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r]
    if (n === r || r === 0) return 1
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r))
  }
  answer = DFS(n, r)
  return answer
}

console.log(solution(5, 3))

//--------------------------

let [N, M] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map(v => Number(v))
console.log(N, M)

function solution(N, M) {
  let answer
  let dy = Array.from(Array(N + 1), () => Array(M + 1).fill(0))

  function DFS(n, m) {
    if (dy[n][m] !== 0) return dy[n][m]
    if (n === m || m === 0) return 1
    else return (dy[n][m] = DFS(n - 1, m - 1) + DFS(n - 1, m))
  }
  answer = DFS(N, M)
  console.log(answer)
}

solution(N, M)

// 조합수

/*
5C3 은 4C3 + 4C2 이다. 
왜 그렇게 되는지 설명해보겠다. 5를 기준으로 3개를 뽑는다고 생각해보자. 무조건 5는 포함되어 있어야 하는 것이다. 
그렇다면 5를 제외한 4개 중에서 2개를 뽑는 경우의 수가 된다. 이 경우 4C2가 된다. 
그리고 5를 포함하지 않는 수를 뽑는다고 한다면, 4개 중에서 3개를 뽑는 경우의 수가 된다. 이 경우 4C3이 된다. 
그렇다면 5C3은 4C3 + 4C2가 된다. 

이것을 반복적으로 수행하다보면, 5C3의 값을 구할 수 있게 된다. 
위의 코드는 이런 개념을 코드로 구현한 것이다. 

이것을 재귀로 푼 이유는 주어진 공식을 반복적으로 수행하면서 풀고 있기 때문이다. 
*/
