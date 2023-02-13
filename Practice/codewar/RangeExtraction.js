function solution(list) {
  let formattedString = ""
  let start = list[0]
  let end = start

  for (let i = 1; i < list.length; i++) {
    if (list[i] - list[i - 1] === 1) {
      end = list[i]
    } else {
      formattedString += getRangeString(start, end)
      start = list[i]
      end = start
    }
  }

  formattedString += getRangeString(start, end)

  return formattedString.substring(1)
}

function getRangeString(start, end) {
  let rangeString = ""

  if (start === end) {
    rangeString = `,${start}`
  } else if (end - start >= 2) {
    rangeString = `,${start}-${end}`
  } else {
    for (let i = start; i <= end; i++) {
      rangeString += `,${i}`
    }
  }

  return rangeString
}

/*
시간 복잡도는 O(n)이다.
1. list를 순회하면서 start와 end를 갱신한다.
2. start와 end의 차이가 1이면 end를 갱신한다.
3. start와 end의 차이가 1이 아니면 start와 end를 이용하여 rangeString을 만든다.
4. 만들어진 rangeString을 formattedString에 추가한다.
5. formattedString을 반환한다.
6. 반환된 formattedString의 첫번째 문자를 제거한다.
7. rangeString을 만드는 함수를 만든다.
8. start와 end가 같으면 start를 반환한다.
9. end와 start의 차이가 2이상이면 start와 end를 이용하여 rangeString을 만든다.
10. start와 end의 차이가 1이면 start부터 end까지 반복문을 돌면서 rangeString을 만든다.
*/
