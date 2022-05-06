function solution(s) {
  var answer = ""
  const arr = s.split(" ")

  arr.forEach((str, j) => {
    let tmpStr = [...str]
    tmpStr.forEach((x, i) => {
      if (i == 0 && isNaN(Number(x))) answer += x.toUpperCase()
      else answer += x.toLowerCase()
    })
    if (j !== arr.length - 1) answer += " "
  })
  return answer
}
