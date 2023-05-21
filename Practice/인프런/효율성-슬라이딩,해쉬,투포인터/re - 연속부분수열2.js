function solution(m, arr) {
  let answer = 0,
    sum = 0,
    lt = 0

  for (let rt = 0; rt < arr.length; rt++) {
    if (arr[rt] < m) answer++
    sum += arr[rt]
    if (sum <= m) answer++

    while (sum > m) {
      sum -= arr[lt++]
      if (sum <= m) answer++
    }
  }

  return answer
}
