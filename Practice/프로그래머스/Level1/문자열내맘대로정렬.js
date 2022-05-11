function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1
    if (a[n] < b[n] > 0) return -1
    if (a[n] === b[n]) {
      if (a > b) return 1
      if (b > a) return -1
    }
  })
}
