function solution(s) {
  var answer = ""
  const array = s.split(" ").map(Number)
  const max = Math.max(...array)
  const min = Math.min(...array)
  answer = `${min} ${max}`
  return answer
}
