var isValid = function (s) {
  const stack = []
  let answer = true
  const checkStr = str => {
    if (str === "(") return ")"
    if (str === "{") return "}"
    if (str === "[") return "]"
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i])
    else if (s[i] === "{") stack.push(s[i])
    else if (s[i] === "[") stack.push(s[i])
    else {
      if (checkStr(stack.pop()) !== s[i]) {
        answer = false
      }
    }
  }
  if (stack.length !== 0) answer = false
  return answer
}
