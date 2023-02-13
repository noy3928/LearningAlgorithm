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

function solution(individualIntegers) {
  return individualIntegers
    .reduce(splitIntoRanges, [])
    .map(convertToRange)
    .join(",")
}

function splitIntoRanges(ranges, number) {
  if (!ranges.length) {
    ranges.push([number])
    return ranges
  }

  var lastRange = ranges[ranges.length - 1]
  var lastNumber = lastRange[lastRange.length - 1]

  number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number])
  return ranges
}

function convertToRange(range) {
  return range.length < 3
    ? range.join(",")
    : range[0] + "-" + range[range.length - 1]
}

/*
설명 : 
1. individualIntegers를 reduce를 이용하여 splitIntoRanges 함수를 적용한다.
2. splitIntoRanges 함수는 ranges와 number를 인자로 받는다.
3. ranges가 비어있으면 ranges에 [number]를 추가하고 반환한다.
4. ranges가 비어있지 않으면 ranges의 마지막 요소를 lastRange에 할당한다.
5. lastRange의 마지막 요소를 lastNumber에 할당한다.
6. number가 lastNumber + 1과 같으면 lastRange에 number를 추가하고 ranges를 반환한다.
7. number가 lastNumber + 1과 같지 않으면 ranges에 [number]를 추가하고 ranges를 반환한다.
8. reduce를 통해 반환된 ranges를 map을 이용하여 convertToRange 함수를 적용한다.
9. convertToRange 함수는 range를 인자로 받는다.
10. range의 길이가 3보다 작으면 range를 join하여 반환한다.
11. range의 길이가 3보다 크면 range의 첫번째 요소와 마지막 요소를 이용하여 range를 만들어 반환한다.
12. map을 통해 반환된 배열을 join하여 반환한다.
13. 반환된 배열을 join하여 반환한다.
*/
