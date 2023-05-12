function isPrime(s) {
  let n = Number(s)
  if (n <= 1) return false

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false
  }

  return true
}

function solution(n, k) {
  let count = 0
  let num = n.toString(k)
  let storedNum = ""

  for (const c of num) {
    if (c !== "0") storedNum += c
    else {
      if (isPrime(storedNum)) {
        count++
        storedNum = ""
      } else {
        storedNum = ""
      }
    }
  }

  if (isPrime(storedNum)) count++

  return count
}

/*
계획 :
1.n을 k진수로 바꾼다. 
2.k진수로 바뀐 숫자를 하나씩 순회한다. 
    2.1. 0을 만나기 전까지 숫자들을 하나씩 저장한다. 
    2.2. 0을 만나면 저장된 숫자들이 소수인지 판별한다. 
        2.2.1. 소수라면 count++한다. 아니면 무시한다. 
*/

/*
주어진 숫자를 k진수로 바꾼다. 
주어진 숫자를 순회하다가, 0을 만나면, 0을 기준으로 이전에 있던 숫자들이 소수인지 판별한다. 
그리고 그 숫자들이 소수라면 count++한다. 
그 숫자들이 소수가 아니라면 그냥 무시한다. 다시 0을 만나면 이전의 숫자들이 소수인지 판별한다. 
*/
