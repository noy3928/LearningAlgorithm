function solution(m, arr) {
  let answer = Number.MIN_SAFE_INTEGER

  for (let lt = 0; lt < arr.length - m; lt++) {
    let sum = 0
    let rt = lt

    while (lt + m > rt) {
      sum += arr[rt++]
    }

    answer = Math.max(sum, answer)
  }

  return answer
}

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]))

//-------------------------

function solution(m, arr) {
  let sum = 0
  for (let i = 0; i < m; i++) {
    sum += arr[i]
  }
  let answer = sum

  for (let i = m; i < arr.length; i++) {
    sum += arr[i] - arr[i - m]
    answer = Math.max(sum, answer)
  }

  return answer
}

/*
내가 위에서 풀었던 풀이대로 풀면, 시간복잡도가 O(n^2)이 된다. 
하지만, 이 문제의 경우 슬라이딩 윈도우로 풀 수 있기 때문에, O(n)으로 풀 수 있다.

그래서 아래처럼 특정 슬라이드 구간을 딱 정해놓고, 그 구간부터 N 번 순회하는 방식으로 푼다면, 
시간을 훨씬 줄일 수 있다. 
*/
