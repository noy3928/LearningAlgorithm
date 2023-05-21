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
