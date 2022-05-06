function solution(n) {
  if (n == 0) return 0
  var answer = 0
  const arr = Array.from({ length: n }, (v, i) => i + 1)
  const divisor = []

  answer = arr.reduce((a, b) => {
    if (n % b == 0) return a + b
    else return a + 0
  })

  return answer
}
