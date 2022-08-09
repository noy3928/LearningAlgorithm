function solution(N) {
  let answer = 0

  function fibo(n) {
    const arr = [0, 1]
    for (let i = 0; i < n; i++) {
      const tmp = (arr[i] + arr[i + 1]) % 1234567
      arr.push(tmp)
    }
    return arr[n]
  }

  return fibo(N)
}
