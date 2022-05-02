function solution(n) {
  var answer = 0
  let x = Math.sqrt(n)
  if (x % 1 === 0) {
    return (x + 1) * (x + 1)
  } else {
    return -1
  }
}
