function d(num) {
  let sum = num
  while (num) {
    sum += num % 10
    num = parseInt(num / 10)
  }
  return sum
}

const solution = () => {
  let nums = new Set()
  for (let i = 1; i <= 10000; i++) {
    nums.add(i)
  }
  for (let i = 1; i <= 10000; i++) {
    nums.delete(d(i))
  }
  const result = [...nums]
  result.forEach(v => console.log(v))
}

solution()
