function solution(arr) {
  var answer = []
  let min = arr[0]
  let index = 0
  arr.forEach((num, i) => {
    if (num < min) {
      min = num
      index = i
    }
  })

  answer = arr.filter((num, i) => i != index)

  if (answer.length > 0) {
    return answer
  } else {
    return [-1]
  }
}
