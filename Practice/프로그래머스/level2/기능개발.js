function solution(progresses, speeds) {
  var answer = []
  let durationArr = []
  let count = 1

  for (let i = 0; i < progresses.length; i++) {
    const restProgress = 100 - progresses[i]
    const duration = Math.ceil(restProgress / speeds[i])
    durationArr.push(duration)
  }

  let stuckday = durationArr[0]

  for (let i = 1; i < durationArr.length; i++) {
    console.log(stuckday, durationArr[i], count)
    if (stuckday >= durationArr[i]) {
      count++
    } else {
      answer.push(count)
      count = 1
      stuckday = durationArr[i]
    }
  }

  answer.push(count)
  return answer
}
