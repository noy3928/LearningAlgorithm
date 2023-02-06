/*
1.들어온 문자열에 대해서 반복문을 실행한다. 
2.반복문을 실행하면서 문자열의 각 문자를 하나씩 가져온다.
3.가져온 문자를 정규식으로 검색한다.
4.검색한 결과가 1이면 해당 문자를 반환한다.
5.반복문이 끝나도 1이 없으면 빈 문자열을 반환한다.
*/

function firstNonRepeatingLetter(s) {
  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    if (s.match(new RegExp(c, "gi")).length === 1) {
      return c
    }
  }
  return ""
}

function first_non_repeating_letter(s) {
  let charCount = {}
  s.split("").forEach(c => {
    c = c.toLowerCase()
    charCount[c] = charCount[c] ? charCount[c] + 1 : 1
  })
  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    if (charCount[c.toLowerCase()] === 1) {
      return c
    }
  }
  return ""
}
/*
1.문자열을 배열로 만들고 반복문을 실행한다.
2.반복문을 실행하면서 문자열의 각 문자를 하나씩 가져온다.
3.가져온 문자를 소문자로 바꾸고 charCount 객체에 저장한다.
4.반복문이 끝나면 charCount 객체를 반복문을 실행한다.
5.가장 먼저 1인 문자를 반환한다.
6.반복문이 끝나도 1이 없으면 빈 문자열을 반환한다.
*/
