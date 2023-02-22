function solution(arr) {
  var answer = []

  arr.forEach((el, i) => {
    if (i == 0) answer.push(el)
    else {
      if (answer[answer.length - 1] !== el) answer.push(el)
    }
  })

  return answer
}
