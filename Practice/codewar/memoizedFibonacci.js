function fibonacci(n, store = {}) {
  if (store[n]) return store[n]

  if (n < 2) return n

  store[n - 1] = fibonacci(n - 1, store)
  store[n - 2] = fibonacci(n - 2, store)
  return store[n - 1] + store[n - 2]
}

// ----

function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n]
  if (n == 0 || n == 1) return n
  let result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
  memo[n] = result
  return result
}

/*
설명 : 
1. memo[n]이라는 변수를 만들어서, n이라는 인자가 memo에 있으면, 그 값을 리턴한다.
2. n이 0이거나 1이면, n을 리턴한다.
3. result라는 변수를 만들어서, n-1과 n-2의 값을 더한 값을 리턴한다.
4. memo[n]에 result를 넣는다.
5. result를 리턴한다.
*/
