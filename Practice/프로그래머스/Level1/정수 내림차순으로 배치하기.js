function solution(n) {
  let answer = [...String(n)].sort((a, b) => b - a)
  return Number(answer.join(""))
}
