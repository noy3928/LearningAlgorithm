function swapSecondAndLastChar(str) {
  if (str.length < 2) {
    // 문자열의 길이가 2보다 작으면 그대로 반환
    return str
  }

  const arr = [...str] // 문자열을 배열로 변환
  ;[arr[1], arr[arr.length - 1]] = [arr[arr.length - 1], arr[1]] // 두 번째 문자와 마지막 문자 교환
  return arr.join("") // 배열을 문자열로 변환하여 반환
}

function decipherThis(str) {
  const strs = str.split(" ")
  const numRegex = /\d+/g
  const result = strs.map(str => {
    const pureStr = str.replace(numRegex, match =>
      String.fromCharCode(parseInt(match))
    )
    return swapSecondAndLastChar(pureStr)
  })
  return result.join(" ")
}

/*
해당 문제는 문자열을 다루는 문제였다. 
정규식도 조금 다룰 줄 알아야하는 문제. 

1. 주어진 문자열을 공백을 기준으로 배열로 만든다.
2. 배열을 순회하면서 숫자를 찾는 정규식을 만든다.
3. 숫자를 찾으면 해당 숫자를 아스키코드로 여기고, 해당 아스키코드를 문자로 변환한다. 
4. 그렇게 반환된 문자열을 가지고, 두 번째 문자와 마지막 문자를 교환한다. 
5. 두 번째 문자와 마지막 문자를 교환하기 위한 함수를 만드는데, 이 안에서는 문자열을 배열로 만들고, 두번째 요소와 마지막 요소를 교체하고, 그렇게 교체된 배열을 하나의 문자열로 변환하여 반환한다. 
6. 그렇게 반환된 문자열은 result 배열에 담긴다. 
7. result 배열을 하나의 문자열로 변환하여 반환한다. 
*/
