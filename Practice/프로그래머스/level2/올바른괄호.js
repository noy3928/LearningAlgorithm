function solution(s) {
  let answer = true
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") stack.push(s[i])
    else if (s[i] == ")") {
      if (stack.pop() !== "(") return (answer = false)
    }
  }
  if (stack.length !== 0) return (answer = false)
  return answer
}
