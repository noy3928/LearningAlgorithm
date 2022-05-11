function solution(s) {
  var answer = true
  let pCount = 0
  let yCount = 0

  const str = s.toLowerCase()

  for (const x of str) {
    if (x === "p") pCount++
    if (x === "y") yCount++
  }
  if (pCount !== yCount) answer = false
  return answer
}
