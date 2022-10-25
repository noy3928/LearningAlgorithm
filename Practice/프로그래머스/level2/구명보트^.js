function solution(people, limit) {
  let answer = 0
  people.sort((a, b) => b - a)
  let L = 0
  let R = people.length - 1

  while (L < R) {
    let sum = people[L] + people[R]
    if (sum > limit) L++
    else {
      L++
      R--
    }
    answer++
  }
  if (L == R) answer++
  return answer
}
