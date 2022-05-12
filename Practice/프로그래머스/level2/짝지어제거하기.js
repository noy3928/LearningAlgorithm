function solution(s) {
  const str = [...s]
  const stack = []

  for (const x of str) {
    if (stack.length === 0) stack.push(x)
    else if (stack[stack.length - 1] == x) {
      stack.pop()
    } else {
      stack.push(x)
    }
  }

  return stack.length ? 0 : 1
}
