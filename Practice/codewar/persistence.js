function multiplyEach(num) {
  let result = 1
  while (num) {
    let t = num % 10
    result *= t
    num = parseInt(num / 10)
  }
  return result
}

function persistence(num) {
  function DFS(number, count) {
    if (number < 10) return count
    return DFS(multiplyEach(number), count + 1)
  }

  return DFS(num, 0)
}

// -------------------------

function persistence(num) {
  var times = 0

  num = num.toString()

  while (num.length > 1) {
    times++
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString()
  }
}
