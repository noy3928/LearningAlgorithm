const reverse = str => {
  let newStr = ""
  if (str.length === 0) return ""
  newStr = str[str.length - 1]
  return newStr.concat(reverse(str.substring(0, str.length - 1)))
}

/*
1.base case는 str의 길이가 0이 되었을 때. 
2.반복하는 행위는 str을 자르고, 그것을 합치는 행위
*/

function reverse(str) {
  if (str.length <= 1) return str
  return reverse(str.slice(1)) + str[0]
}
