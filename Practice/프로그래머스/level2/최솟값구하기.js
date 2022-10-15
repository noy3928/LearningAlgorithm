function solution(A, B) {
  var answer = 0
  const arrA = A.sort((a, b) => a - b)
  const arrB = B.sort((a, b) => b - a)

  for (let i = 0; i < arrA.length; i++) {
    answer += arrA[i] * arrB[i]
  }
  return answer
}
