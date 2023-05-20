function solution(m, arr) {
  let answer = 0,
    sum = 0,
    p1 = 0,
    p2 = 1

  while (p2 < arr.length) {
    if (sum == m) {
      answer++
      sum -= arr[p1++]
      sum += arr[p2++]
    } else if (sum > m) {
      sum -= arr[p1++]
    } else {
      sum += arr[p2++]
    }
  }

  return answer
}

/*
내가 이런 방식으로 문제를 풀어야겠다고 생각한 이유는 
주어진 연속배열을 구하기 위해서는 투 포인터가 필요했다. 
그래서 투 포인터를 움직여가면서 연속한 숫자들의 합이 무엇인지 구해야했고, 
연속한 숫자들의 합이 원하는 조건에 부합할 때 answer를 ++해주도록 했다. 
*/
