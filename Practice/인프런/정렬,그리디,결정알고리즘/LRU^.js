function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0)
  arr.forEach(x => {
    let pos = -1
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1]
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1]
      }
    }
    answer[0] = x
  })

  return answer
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7]
console.log(solution(5, arr))

//----- unshift 방식

function solution(size, arr) {
  let answer = []
  arr.forEach(x => {
    let pos = -1
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i
    if (pos === -1) {
      answer.unshift(x)
      if (answer.length > size) answer.pop()
    } else {
      answer.splice(pos, 1)
      answer.unshift(x)
    }
  })

  return answer
}

// --------------------------

function solution(n, arr) {
  const cache = Array.from({ length: n }, () => 0)
  const cacheHit = new Set()

  for (let i = 0; i < arr.length; i++) {
    let j
    if (cacheHit.has(arr[i])) j = cache.indexOf(arr[i])
    else j = cache.length - 1
    while (j >= 0) {
      cache[j] = cache[j - 1]
      j--
    }
    cache[j + 1] = arr[i]
  }
  return cache
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]))
