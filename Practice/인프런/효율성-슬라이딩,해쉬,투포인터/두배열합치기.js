/*
오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램 을 작성하세요.
*/

function solution(arr1, arr2) {
  let answer = []
  let n = arr1.length
  let m = arr2.length
  let p1 = (p2 = 0)
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++])
    else answer.push(arr2[p2++])
  }
  while (p1 < n) answer.push(arr1[p1++])
  while (p2 < m) answer.push(arr2[p2++])
  return answer
}

// let a = [1, 3, 5]
// let b = [2, 3, 6, 7, 9]
console.log(solution(a, b))

//---------------------------------------

function solution(arr1, arr2) {
  let answer = arr1.concat(arr2).sort((a, b) => a - b)
  return answer
}

// let a = [1, 3, 5]
// let b = [2, 3, 6, 7, 9]
console.log(solution(a, b))

//----------------------------------------

/*
1.한 배열에 다른 배열을 합친다. 
2.합친 배열을 돌면서, i번째와 i+1번째를 확인한다. 
3.i번째 수가 i+1번보다 크다면, i번째와 i+1번째를 바꾼다. 
4.i번째 수가 i+1번과 같거나 작다면, 그대로 진행한다.
*/

function solution(arr1, arr2) {
  let answer = []
  let n = arr1.length
  let m = arr2.length
  let p1 = (p2 = 0)

  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++])
    else answer.push(arr2[p2++])
  }

  while (p1 < n) answer.push(arr1[p1++])
  while (p2 < m) answer.push(arr2[p2++])

  return answer
}

//--------------------------------------

/*
해당 문제는 두 배열을 동시에 다루는 법을 묻고 있는 것 같다. 
더 큰 숫자를 뒤에 넣는 방식으로 두 배열의 요소들을 비교하면서 하나의 배열에 담아나가는 것이다. 

계획 : 
1. 두 배열 모두의 인덱스를 초기화한다. 
2. while문을 돌려서 두 배열의 요소들을 비교한다. 두 배열의 내용물이 사라질 때까지 순회한다. 
3. 두 배열의 요소를 비교해서 더 작은 숫자를 answer에 넣는다. 
4. 해당 배열의 인덱스를 1 증가시킨다. 
*/

function solution(a, b) {
  let answer = []
  let aIndex = 0
  let bIndex = 0

  while (aIndex < a.length && bIndex < b.length) {
    if (a[aIndex] < b[bIndex]) {
      answer.push(a[aIndex++])
    } else {
      answer.push(b[bIndex++])
    }
  }
}

let a = [1, 3, 5]
let b = [2, 3, 6, 7, 9]
console.log(solution(a, b))
