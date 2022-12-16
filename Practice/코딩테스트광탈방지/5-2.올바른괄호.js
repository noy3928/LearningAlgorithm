function solution(s) {
  if (s[0] == ")") return false

  let answer = true
  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") stack.push(s[i])
    if (s[i] == ")") {
      const lastChar = stack[stack.length - 1]

      if (lastChar == "(") stack.pop()
      else return (answer = false)
    }
  }

  if (stack.length !== 0) return false

  return answer
}
