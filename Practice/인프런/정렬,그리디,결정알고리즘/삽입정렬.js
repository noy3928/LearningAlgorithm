function solution(arr) {
  let answer = arr
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j]
      else break
    }
    arr[j + 1] = tmp
  }
  return answer
}

let arr = [11, 7, 5, 6, 10, 9]
console.log(solution(arr))

function insertionSort(arr) {
  const length = arr.length

  for (let i = 1; i < length; i++) {
    let current = arr[i] // 현재 선택한 요소
    let j = i - 1 // 이미 정렬된 부분의 마지막 요소의 인덱스

    while (j >= 0 && arr[j] > current) {
      // 이미 정렬된 부분에서 current보다 큰 요소를 찾을 때까지 왼쪽으로 이동
      arr[j + 1] = arr[j]
      j--
    }

    // current 값을 정렬된 위치에 삽입
    arr[j + 1] = current
  }

  return arr
}
