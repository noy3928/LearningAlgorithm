function solution(arr) {
  let answer = "NO",
    flag = 0
  let total = arr.reduce((a, b) => a + b, 0)
  let n = arr.length

  function DFS(L, sum) {
    if (flag) return
    if (L === n) {
      if (total - sum === sum) {
        answer = "YES"
        flag = 1
      }
    } else {
      DFS(L + 1, sum + arr[L])
      DFS(L + 1, sum)
    }
  }
  DFS(0, 0)
  return answer
}

let arr = [1, 3, 5, 6, 7, 10]
console.log(solution(arr))

function solution(arr) {
  let check = Array.from({ length: arr.length }, () => false)
  const Length = arr.length
  let answer = "NO"

  function DFS(L) {
    if (L == Length) {
      let leftSum = 0
      let rightSum = 0
      for (let i = 0; i < Length; i++) {
        if (check[i]) {
          leftSum += arr[i]
        } else {
          rightSum += arr[i]
        }
      }
      if (leftSum == rightSum) return (answer = "YES")
      return
    } else {
      check[L] = true
      DFS(L + 1)
      check[L] = false
      DFS(L + 1)
    }
  }
  DFS(0)
  console.log(answer)
}
