function solution(s) {
  var answer = ""
  let tmp = s.split(" ")
  let changedArr = []

  for (const x of tmp) {
    let str = ""
    const arr = [...x]
    arr.forEach((v, i) => {
      if (i % 2 == 0) str += v.toUpperCase()
      else str += v.toLowerCase()
    })
    changedArr.push(str)
  }

  answer = changedArr.join(" ")
  return answer
}
