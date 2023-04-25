function solution(n, left, right) {
  var answer = []

  for (let i = 0; i < n; i++) {
    answer.push([])
    let count = i + 1
    for (let j = 0; j < n; j++) {
      if (j > i) count++
      answer[i].push(count)
    }
  }

  const newArr = []
  answer.forEach(arr => newArr.push(...arr))

  return newArr.slice(left, right + 1)
}

// ----------------------------
function solution(n, left, right) {
  var answer = []

  for (let i = 0; i < n; i++) {
    let count = i + 1
    for (let j = 0; j < n; j++) {
      if (j > i) count++ // 0 1 2 3
      answer.push(count)
    }
  }

  return answer.slice(left, right + 1)
}

/*
1 2 3 4 
2 2 3 4 
3 3 3 4
4 4 4 4
*/
