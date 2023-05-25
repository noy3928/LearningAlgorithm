/*
1. 시작시간과 끝시간. 최대한 많은 강의. 
2. 시작 순으로 정렬되어 있으니, 이 상태에서 끝나는 시간을 가지고 시작하는 시간을 찾는다.
3. 시작하는 시간이 끝나는 시간과 같거나 더 크다면 그것을 사용하고, answer에 + 1 을 한다. 
4. for문을 끝까지 돈 다면, 2번째부터 시작. 이것을 반복. 
*/

// 나의 풀이

const solution = input => {
  let answer = 1
  const sortedInput = input.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0]
    else return a[1] - b[1]
  })

  let end = sortedInput[0][1]
  for (let i = 1; i < sortedInput.length; i++) {
    if (Number(input[i][0]) >= Number(end)) {
      answer++
      end = input[i][1]
    }
  }
  console.log(answer)
}

solution(input)

//---- 선생님 풀이

function solution(meeting) {
  let answer = 0
  meeting.sort((a, b) => {
    // 우선 시간대별로 정렬한다.
    if (a[1] === b[1]) return a[0] - b[0]
    else return a[1] - b[1]
  })
  let et = 0 // 마지막 시간을 저장할 변수를 만든다.
  for (let x of meeting) {
    if (x[0] >= et) {
      // x[0]은 시작시간, et은 마지막 시간. 시작시간이 마지막 시간보다 크거나 같다면,
      answer++ // answer에 + 1을 해주고
      et = x[1] // 마지막 시간을 x[1]로 바꿔준다.
    }
  }
  return answer
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
]
console.log(solution(arr))
