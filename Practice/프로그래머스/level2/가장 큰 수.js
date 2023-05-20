function solution(numbers) {
  let answer = "0"
  let n = numbers.length
  let ch = Array.from({ length: n }, () => 0)
  let tmp = []

  function DFS(L) {
    if (answer[0] > tmp[0]) return
    if (L === n) {
      const tmpNum = tmp.join("")
      return (answer = Math.max(Number(answer), Number(tmpNum)))
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1
          tmp.push(numbers[i])
          DFS(L + 1)
          ch[i] = 0
          tmp.pop()
        }
      }
    }
  }

  DFS(0)

  return String(answer)
}

///-------------------

function solution(numbers) {
  const strNums = numbers.map(String)

  strNums.sort((a, b) => {
    const ab = a + b // 6, 10 => 610
    const ba = b + a // 10, 6 => 106
    return ba.localeCompare(ab)
  })

  if (strNums[0] === "0") {
    return "0"
  }

  return strNums.join("")
}

solution([6, 10, 2])
solution([3, 30, 34, 5, 9])

/*
이런 방법은 어떻게 떠올릴 수 있는 것일까. 
*/
